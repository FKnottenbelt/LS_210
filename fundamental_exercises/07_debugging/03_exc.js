function generateRandomInt() {
  return Math.floor(Math.random() * 25) + 1;
}

function placeABet(guess) {

  var winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

//var userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
var userGuess = 13;
console.log(placeABet(userGuess));
