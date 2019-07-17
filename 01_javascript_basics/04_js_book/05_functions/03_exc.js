function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');
console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);