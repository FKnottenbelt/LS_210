function substr(string, start, length) {
  const begin = start >= 0 ? start : string.length + start;
  let result = '';

  for (let i = 0; i < length; i += 1) {
    if (begin + i >= string.length) {
      break;
    }
    result += string[begin + i];
  }

  return result;
}

const string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
