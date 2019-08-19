function substring(string, start, end) {
  let myStart = start;
  let myEnd = end === undefined ? string.length : end;
  let result = '';

  if (Number.isNaN(Number(myStart)) || myStart < 0) {
    myStart = 0;
  }

  if (Number.isNaN(Number(myEnd)) || myEnd < 0) {
    myEnd = 0;
  }

  if (myStart > string.length) {
    myStart = string.length;
  }

  if (myEnd > string.length) {
    myEnd = string.length;
  }

  if (myEnd < myStart) {
    const temp = myStart;
    myStart = myEnd;
    myEnd = temp;
  }

  for (let i = myStart; i < myEnd; i += 1) {
    result += string[i];
  }

  return result;
}

const string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
