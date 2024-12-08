const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const grid = input.split("\n").map((line) => {
  return line.split("");
});

// Simplify grid lookup with optional chaining
const lookAt = (x, y) => grid?.[y]?.[x] ?? null;

const directions = {
  N: [0, -1],
  NE: [1, -1],
  E: [1, 0],
  SE: [1, 1],
  S: [0, 1],
  SW: [-1, 1],
  W: [-1, 0],
  NW: [-1, -1],
};

const lookAround = (x, y, direction, target) => {
  const [dx, dy] = directions[direction];
  const value = lookAt(x + dx, y + dy);
  return value === target;
};

let count = 0;
for (let y = 0; y < grid.length; y++) {
  for (let x = 0; x < grid[0].length; x++) {
    if (grid[y][x] === "A") {
      if (lookAround(x, y, "NW", "M")) {
        if (lookAround(x, y, "SW", "M")) {
          count += lookAround(x, y, "NE", "S") * lookAround(x, y, "SE", "S");
        }
        if (lookAround(x, y, "NE", "M")) {
          count += lookAround(x, y, "SW", "S") * lookAround(x, y, "SE", "S");
        }
      }
      if (lookAround(x, y, "SE", "M")) {
        if (lookAround(x, y, "SW", "M")) {
          count += lookAround(x, y, "NE", "S") * lookAround(x, y, "NW", "S");
        }
        if (lookAround(x, y, "NE", "M")) {
          count += lookAround(x, y, "SW", "S") * lookAround(x, y, "NW", "S");
        }
      }
    }
  }
}
console.log(count);

// console.log(grid);
