const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

function findMultiplications(input) {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  return input.match(regex) || [];
}
const multiplications = findMultiplications(input)
  .map((multiplication) => {
    const parsed = multiplication.match(/\d{1,3}/g);
    return parsed[0] * parsed[1];
  })
  .reduce((curr, acc) => curr + acc);
console.log(multiplications);
