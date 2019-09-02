function crunch(string) {
  let result = '';
  let save = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== save) {
      result += string[i];
    }
    save = string[i];
  }
  return result;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
