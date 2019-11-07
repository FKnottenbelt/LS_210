function sum(int) {
  return String(int).split('').map(Number).reduce((sum, value) => sum + value);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

