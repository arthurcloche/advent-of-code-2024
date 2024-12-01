const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const left = [];
const right = [];

const a = input.split("\n").forEach((row) => {
  const line = row.split("   ");
  left.push(Number(line[0]));
  right.push(Number(line[1]));
});

left.sort((a, b) => {
  return a - b;
});
right.sort((a, b) => {
  return a - b;
});
// console.log(left, right);
const b = left.reduce((acc, _, i) => {
  const s = Math.abs(Number(left[i]) - Number(right[i]));
  return acc + s;
}, 0);

console.log(b);
