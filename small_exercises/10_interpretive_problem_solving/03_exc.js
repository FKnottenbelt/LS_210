function invalidInput(string) {
  return !string || !!string.match(/[^a-z]/gi);
}

function isBlockWord(string) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  const chars = string.toUpperCase().split('');
  if (invalidInput(string)) return false;

  for (let i = 0; i < chars.length; i += 1) {
    let found = false;

    blocks = blocks.map((block) => {
      if (block.match(chars[i])) {
        found = true;
        return '';
      }
      return block;
    });

    if (!found) return false;
  }

  return true;
}

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BABCH')); // false
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest')); // true
console.log(isBlockWord('')); // false
console.log(isBlockWord('j&est')); // false

console.log('----');
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false