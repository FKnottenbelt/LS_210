function doubleDigits(num) {
  const digits = String(num).split('');
  const len = digits.length;

  for (let i = 0; i < len; i += 1) {
    const first = digits.shift();
    if (digits.includes(first)) return true;
  }
  return false;
}

function isFeaturedNum(num) {
  if (!(num % 2 === 1)) return false;
  if (!(num % 7 === 0)) return false;
  if (doubleDigits(num)) return false;
  return true;
}

function featured(num) {
  const BIGGEST = 9876543201;

  for (let i = num + 1; i <= BIGGEST; i += 1) {
    if (isFeaturedNum(i)) return i;
  }

  return 'no featured number';
}


console.log(doubleDigits(1023449)); // true
console.log(doubleDigits(134)); // false

console.log(featured(49)); // featured
console.log(featured(98)); // NOT featured
console.log(featured(97)); // NOT featured
console.log(featured(133)); // NOT featured
console.log(featured('----------'));

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987


// odd multiple of 7
// all digits only once

// 49  = 7 * 7
// 98 = 14 * 7 but not odd

// check if featured
// if so, loop : add 7, check featured, if so ouput
// if not and > biggest. stop. and give error message
