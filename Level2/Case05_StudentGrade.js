const readline = require("readline-sync");

let scores = [];
let total = 0;
let passed = 0;
let failed = 0;

for (let i = 1; i <= 10; i++) {
  let score = readline.questionInt("Enter score for student " + i + ": ");
  scores.push(score);
  total += score;
  if (score >= 75) {
    passed++;
  } else {
    failed++;
  }
}

let average = total / 10;
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

console.log("\n--- Report ---");
console.log("Average score : " + average);
console.log("Passed        : " + passed + " students");
console.log("Failed        : " + failed + " students");
console.log("Highest score : " + highest);
console.log("Lowest score  : " + lowest);
