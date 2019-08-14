const rlSync = require('readline-sync');

const scores = [];

for (let scoreNumber = 1; scoreNumber <= 3; scoreNumber += 1) {
  const score = rlSync.question(`Enter score ${scoreNumber}:\n`);
  scores.push(Number(score));
}

function ArrayAverage(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = array.reduce(reducer);
  const average = sum / array.length;
  return average;
}

const average = ArrayAverage(scores);

if (average >= 90) {
  console.log('Based on the average of your 3 scores your letter grade is "A".');
} else if (average >= 70) {
  console.log('Based on the average of your 3 scores your letter grade is "B".');
} else if (average >= 50) {
  console.log('Based on the average of your 3 scores your letter grade is "B".');
} else {
  console.log('Based on the average of your 3 scores your letter grade is "F".');
}
