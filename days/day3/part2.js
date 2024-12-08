const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

function findMultiplications(input) {
  const regex = /(?:mul\((\d{1,3}),(\d{1,3})\)|do(?:n't)?\(\))/g;
  return input.match(regex) || [];
}

let allowed = true;
const multiplications = findMultiplications(input)
  .map((multiplication) => {
    if (multiplication === "don't()") {
      allowed = false;
      return 0;
    }
    if (multiplication === "do()") {
      allowed = true;
      return 0;
    }

    const parsed = multiplication.match(/\d{1,3}/g);
    console.log(parsed, allowed);
    return parsed[0] * parsed[1] * allowed;
  })
  .reduce((curr, acc) => curr + acc);
console.log(multiplications);
