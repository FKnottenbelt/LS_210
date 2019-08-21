const rlSync = require('readline-sync');

const bill = Number(rlSync.question('What is the bill?:\n'));
const tipPercentage = Number(rlSync.question('What is the tip percentage?:\n'));

const tip = (bill / 100) * tipPercentage;
const total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
