const readline = require("readline-sync");

let dailySavings = 5000;
let savings = 0;
let daysNeeded = 0;

for (let day = 1; day <= 30; day++) {
  savings += dailySavings;
  console.log("Day " + day + " : Rp" + savings);
}

console.log("\nFinal savings after 30 days: Rp" + savings);

let tempSavings = 0;
for (let day = 1; day <= 30; day++) {
  tempSavings += dailySavings;
  if (tempSavings >= 100000 && daysNeeded === 0) {
    daysNeeded = day;
  }
}

console.log("Days needed to save Rp100,000: " + daysNeeded + " days");
