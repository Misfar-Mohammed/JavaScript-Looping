const readline = require("readline-sync");

let sales = [];
let total = 0;
let highestSales = 0;
let highestDay = 1;
let daysAboveTarget = 0;
let dailyTarget = 500000;
let weeklyTarget = 3500000;

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let i = 0; i < 7; i++) {
  let amount = readline.questionInt("Enter sales for " + days[i] + ": Rp");
  sales.push(amount);
  total += amount;

  if (amount > highestSales) {
    highestSales = amount;
    highestDay = days[i];
  }

  if (amount > dailyTarget) {
    daysAboveTarget++;
  }
}

let average = total / 7;

console.log("\n--- Weekly Sales Report ---");
console.log("Weekly total   : Rp" + total);
console.log("Daily average  : Rp" + average.toFixed(0));
console.log("Days > Rp500k  : " + daysAboveTarget + " day(s)");
console.log("Best sales day : " + highestDay + " (Rp" + highestSales + ")");

if (total >= weeklyTarget) {
  console.log("Weekly target  : ACHIEVED!");
} else {
  console.log("Weekly target  : NOT achieved (short by Rp" + (weeklyTarget - total) + ")");
}
