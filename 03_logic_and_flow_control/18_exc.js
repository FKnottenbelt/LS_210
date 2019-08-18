function startsWith(string, searchString) {
  for (let i = 0; i < searchString.length; i += 1) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}

const str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

const longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
