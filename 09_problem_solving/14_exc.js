const INVALID = 'not valid';
const VALID = 'valid';

function luhnCheck(string) {
  const hasDigits = /\d/g.test(string);
  if (!string || !hasDigits || typeof string !== 'string') return INVALID;

  let digits = string.match(/\d/g).reverse().map(digit => Number(digit));

  digits = digits.map((digit, index) => {
    if (index % 2 === 0) return digit;
    digit *= 2;
    return digit >= 10 ? digit - 9 : digit;
  });

  let checksum = digits.reduce((sum, value) => sum + value);

  if (String(checksum).slice(-1) === '0') return VALID;
  return INVALID;
}


console.log(luhnCheck('2323 2005 7766 3554') === 'valid');
console.log(luhnCheck('1111') === 'not valid');
console.log(luhnCheck('11b11') === 'not valid');
console.log(luhnCheck('8763') === 'valid');
console.log(luhnCheck('87a63') === 'valid');
console.log(luhnCheck('') === 'not valid');
console.log(luhnCheck(8763) === 'not valid');
console.log(luhnCheck('asdfe') === 'not valid');