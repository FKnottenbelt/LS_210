const read = require('readline-sync');

function askNumber(question) {
  let number;

  do {
    number = Number(read.question(`${question}`));
  } while (Number.isNaN(number));

  return number;
}

const numbers = [];

for (let i = 1; i <= 5; i += 1) {
  const number = askNumber(`enter number ${i}: `);
  numbers.push(number);
}

const last = askNumber('enter the last number: ');
if (numbers.includes(last)) {
  console.log(`The number ${last} appears in ${numbers.join(', ')}`);
} else {
  console.log(`The number ${last} does not appear in ${numbers.join(', ')}`);
}
