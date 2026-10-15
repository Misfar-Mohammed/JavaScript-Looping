const readline = require("readline-sync");

let number = readline.questionInt("Enter a number for multiplication table: ");

for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(number + " x " + i + " = " + result);
}
