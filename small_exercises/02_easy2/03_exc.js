function stringy(integer) {
  let result = '';
  for (let i = 1; i <= integer; i += 1) {
    if (i % 2 === 0) {
      result += '0';
    } else {
      result += '1';
    }
  }

  return result;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
