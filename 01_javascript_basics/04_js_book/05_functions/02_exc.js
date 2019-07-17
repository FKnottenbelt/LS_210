let rlSync = require('readline-sync');

function name() {
  let firstName = rlSync.question('What is your first name?\n');
  let lastName = rlSync.question('What is your last name?\n');
  return firstName + ' ' + lastName;
};

console.log(name());


// LS more general solution

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);