const firstName = 'John';
const lastName = 'Doe';
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

console.log(firstName.concat(lastName));
console.log(fullName.split(' '));

var language = 'JavaScript';
var idx = language.indexOf('S');
console.log(idx);                            // 4

var charCode = language.charCodeAt(idx);
console.log(charCode);                       // 83

console.log(String.fromCharCode(charCode));  // 'S'

console.log(language.lastIndexOf('a'));      // 3

var a = 'a';
var b = 'b';

console.log(a > b);                          // false
b = 'B';
console.log(a > b);                          // true

var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));     // 'avaS'
console.log(language.substr(vIndex, 4));     // 'vaSc'

console.log(language.substring(aIndex, 4));  // 'ava'
console.log(language.substring(vIndex, 4));  // 'va'

var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';
var compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);  // 'JavaScript is fun and kids like it too'

console.log(fact1[0]);                       // 'J'
console.log(fact2[0]);                       // 'K'

var pi = 22 / 7;
pi = pi.toString();

console.log(pi.lastIndexOf('14'));             // 14

var boxNumber = String(356);
console.log(boxNumber);                      // '356'

console.log(typeof boxNumber);               // 'string'
boxNumber = parseInt(boxNumber, 10);         // 356
console.log(typeof boxNumber);               // 'number'
boxNumber = String(boxNumber);               // '356'
console.log(typeof boxNumber);               // 'string'

var name = prompt('What is your name?');

if (name.endsWith('!')) {
  name = name.slice(0, -1);
  console.log('HELLO ' + name.toUpperCase() + '. WHY ARE WE SCREAMING?');
} else {
  console.log('Hello ' + name + '.');
}
