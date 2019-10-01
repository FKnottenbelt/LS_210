function penultimate(string) {
  const wordsArray = string.split(' ');
  return wordsArray[wordsArray.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
