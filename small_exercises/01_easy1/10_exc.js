function asciiValue(string) {
  let result = 0;

  for (let i = 0; i < string.length; i += 1) {
    result += string[i].charCodeAt(0);
  }

  return result;
}


console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0