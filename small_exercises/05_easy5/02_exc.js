function doubleConsonants(string) {
  return string.split('').map((char) => {
    if (char.match(/[a-z]/ig) && char.match(/[^aeiou]/gi)) {
      return `${char}${char}`;
    } else {
      return char;
    }
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
