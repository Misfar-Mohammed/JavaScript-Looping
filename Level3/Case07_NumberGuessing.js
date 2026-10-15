const readline = require("readline-sync");

let secretNumber = 37;
let maxAttempts = 7;
let attempts = 0;
let guessed = false;

while (attempts < maxAttempts) {
  let guess = readline.questionInt("Guess the number: ");
  attempts++;

  if (guess === secretNumber) {
    console.log("Correct! You guessed it in " + attempts + " attempt(s).");
    guessed = true;
    break;
  } else if (guess > secretNumber) {
    console.log("Too high! Attempts left: " + (maxAttempts - attempts));
  } else {
    console.log("Too low! Attempts left: " + (maxAttempts - attempts));
  }
}

if (!guessed) {
  console.log("Out of attempts! The number was " + secretNumber + ".");
}
