function centerOf(string) {
  const half = Math.floor(string.length / 2);
  let result = '';

  if (string.length % 2 === 0) {
    result = string[half - 1] + string[half];
  } else {
    result = string[half];
  }

  return result;
}

console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"
