const readline = require("readline-sync");

let balance = 1000000;

console.log("Initial balance: Rp" + balance);
console.log("Enter 0 to exit.\n");

while (true) {
  let amount = readline.questionInt("Enter withdrawal amount: ");

  if (amount === 0) {
    console.log("Thank you. Final balance: Rp" + balance);
    break;
  } else if (amount < 0) {
    console.log("Invalid amount. Please enter a positive number.");
  } else if (amount > balance) {
    console.log("Insufficient balance. Your balance is Rp" + balance);
  } else {
    balance -= amount;
    console.log("Withdrawal successful. Remaining balance: Rp" + balance);
  }
}
