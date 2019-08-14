const rlSync = require('readline-sync');

const password = 'secret';

for (let i = 1; i <= 3; i += 1) {
  const guess = rlSync.question('What is the password:\n');

  if (guess === password) {
    console.log('You have successfully logged in.');
    break;
  } else if (i === 3) {
    console.log('You have been denied access.');
  } else {
    console.log('Sorry, that is not correct, try again');
  }
}
