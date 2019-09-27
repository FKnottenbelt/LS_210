function repeatedCharacters(word) {
  const count = {};
  const repeats = word.toLowerCase().split('').sort().join('').match(/(.)\1{1,}/g);

  if (repeats) repeats.forEach(combi => count[combi[0]] = combi.length);
  return count;
}

// alternative:

function repeatedCharacters(word) {
  const lowercaseWord = word.toLowerCase();
  const count = {};

  for (let i = 0; i < lowercaseWord.length; i += 1) {
    if (!count[lowercaseWord[i]]) count[lowercaseWord[i]] = 0;
    count[lowercaseWord[i]] += 1;
  }

  for (const key in count) {
    if (count[key] === 1) {
      delete count[key];
    }
  }
  return count;

}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
