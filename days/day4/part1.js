const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const grid = input.split("\n").map((line) => {
  return line.split("");
});
const lookAt = (x, y) => {
  if (y < 0 || y >= grid.length || x < 0 || x >= grid[0].length) {
    return null;
  }
  return grid[y][x];
};

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
    if (grid[y][x] === "X") {
      for (const direction of Object.keys(directions)) {
        if (lookAround(x, y, direction, "M")) {
          const [dx, dy] = directions[direction];
          const mx = x + dx;
          const my = y + dy;

          if (lookAround(mx, my, direction, "A")) {
            const ax = mx + dx;
            const ay = my + dy;

            if (lookAround(ax, ay, direction, "S")) {
              count++;
            }
          }
        }
      }
    }
  }
}
console.log(count);

// console.log(grid);
/*
// Extract target pattern to a constant
const TARGET = "XMAS";

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

// Combine lookAround checks into a single function that checks the full pattern
const checkPattern = (x, y, direction) => {
  const [dx, dy] = directions[direction];

  return TARGET.split("").every((char, i) => {
    const newX = x + dx * i;
    const newY = y + dy * i;
    return lookAt(newX, newY) === char;
  });
};

// Simplify main loop
const count = grid.reduce((total, row, y) => {
  return (
    total +
    row.reduce((rowTotal, cell, x) => {
      if (cell !== "X") return rowTotal;

      return (
        rowTotal +
        Object.keys(directions).filter((dir) => checkPattern(x, y, dir)).length
      );
    }, 0)
  );
}, 0);
*/
