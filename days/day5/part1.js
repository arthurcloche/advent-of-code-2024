const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const [_rules, _sequences] = input.split("\n\n");
const rules = _rules.split("\n").map((rule) => rule.split("|"));
const sequences = _sequences.split("\n").map((sequence) => sequence.split(","));

const checkRules = (num, seq) => {
  const subrules = rules.filter(
    (rule) => rule[0] === num && seq.includes(rule[1])
  );
  if (subrules.length === 0) return true;
  const index = seq.indexOf(num);
  for (let subrule of subrules) {
    if (seq.indexOf(subrule[1]) < index) return false;
  }
  return true;
};
const a = sequences
  .filter((sequence) => sequence.every((num, _, seq) => checkRules(num, seq)))
  .reduce(
    (acc, curr) => acc + Number(curr[Math.ceil((curr.length - 1) * 0.5)]),
    0
  );

console.log(a);
