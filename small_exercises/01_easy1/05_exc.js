function sumIntegers(int) {
  let result = 0;
  for (let i = 1; i <= int; i += 1) {
    result += i;
  }
  return result;
}

function productInteger(int) {
  let result = 1;
  for (let i = 1; i <= int; i += 1) {
    result *= i;
  }
  return result;
}

const rlSync = require('readline-sync');

const integer = parseInt(rlSync.question('Please enter an integer greater than 0:\n'), 10);
let action = '';
let result;

do {
  action = (rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.')).toLowerCase();
} while (/[^ps]/.test(action));

if (action === 's') {
  result = sumIntegers(integer);
  action = 'sum';
} else if (action === 'p') {
  result = productInteger(integer);
  action = 'product';
} else {
  result = 'I can not compute that';
}

console.log(`The ${action} of the integers between 1 and ${integer} \
is ${result}`);
