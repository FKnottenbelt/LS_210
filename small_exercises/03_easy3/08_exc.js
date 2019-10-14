function swap(string) {
  return string.split(' ').map((word) => {
    const chars = word.split('');
    const len = chars.length;

    [chars[0], chars[len - 1]] = [chars[len - 1], chars[0]];
    return chars.join('');

  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is')); // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde')); // "ebcdA"
console.log(swap('a')); // "a"
