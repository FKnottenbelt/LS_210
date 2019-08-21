function shortLongShort(str1, str2) {
  let longest;
  let shortest;

  if (str1.length > str2.length) {
    longest = str1;
    shortest = str2;
  } else {
    longest = str2;
    shortest = str1;
  }

  return shortest + longest + shortest;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
