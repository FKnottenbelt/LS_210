function repeater(string) {
  return string.split('').map((char) => {
    return `${char}${char}`;
  }).join('');
}


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""