const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const lines = input.split("\n").map((line) => {
  const report = line.split(" ").map((item) => Number(item));
  let direction = undefined;
  let valid = false;
  for (let i = 0; i < report.length - 1; i++) {
    valid = false;
    const current = report[i];
    const next = report[i + 1];
    const dir = Math.sign(next - current);
    const gap = Math.abs(next - current);
    if (!direction) direction = dir;
    if (dir !== direction) break;
    if (gap < 1 || gap > 3) break;
    valid = true;
  }
  return valid;
});

console.log(lines.filter((line) => line !== false).length);
