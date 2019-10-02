function stringToSignedInteger(string) {
  const LOOKUP = { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
                   '7': 7, '8': 8, '9':9 };
  let int = 0;
  const stringDigits = string.split('');
  if (stringDigits[0] === '-' || stringDigits[0] === '+') stringDigits.shift();

  stringDigits.forEach( (num) => {
    int = (int * 10) + LOOKUP[num];
  });

  return string.startsWith('-') ?  -1 * int : int;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));       // -570
console.log(stringToSignedInteger('+100'));      // 100