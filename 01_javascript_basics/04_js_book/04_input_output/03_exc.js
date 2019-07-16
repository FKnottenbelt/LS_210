let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you?\n'));


console.log(`You are ${age} years old.`);

var i = 10;
while (i < 50) {
  console.log(`In ${i} years, you will be ${ i + age} years old. `);
  i = i + 10;
}