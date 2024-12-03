const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

function isValidSequence(report) {
  let direction;
  for (let i = 0; i < report.length - 1; i++) {
    const current = report[i];
    const next = report[i + 1];
    const dir = Math.sign(next - current);
    const gap = Math.abs(next - current);
    if (!direction) direction = dir;
    if (dir !== direction || gap < 1 || gap > 3) {
      return false;
    }
  }
  return true;
}

const lines = input.split("\n").map((line) => {
  const report = line.split(" ").map((item) => Number(item));
  if (isValidSequence(report)) return true;
  for (let i = 0; i < report.length; i++) {
    const test = [...report];
    test.splice(i, 1);
    if (isValidSequence(test)) {
      return true;
    }
  }
  return false;
});

console.log(lines.filter((line) => line).length);
