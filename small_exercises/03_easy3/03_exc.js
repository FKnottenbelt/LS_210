const read = require('readline-sync');

function ask(question) {
  let answer = '';
  do {
    answer = Number(read.question(question));
    if (Number.isNaN(answer)) console.log('please enter a number');
  } while (Number.isNaN(answer));

  return answer;
}

const age = ask('What is your age? ');
const retireAge = ask('At what age would you like to retire? ');
const yearsToGo = retireAge - age;
const nowYear = new Date().getFullYear();
const retireYear = Number(nowYear) + yearsToGo;

console.log(`It's ${nowYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${yearsToGo} years of work to go!`);
