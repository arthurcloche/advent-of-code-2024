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

const frequencies = {};
right.forEach((value) => {
  frequencies[value] = (frequencies[value] || 0) + 1;
});

const c = left.reduce((acc, curr, i) => {
  const s = (frequencies[curr] || 0) * curr;
  return acc + s;
}, 0);

console.log(c);
