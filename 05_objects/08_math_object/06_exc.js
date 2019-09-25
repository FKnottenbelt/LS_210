function randomValue(start, end) {
  const min = Math.min(start, end);
  const max = Math.max(start, end);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomValue(1, 10));
console.log(randomValue(10, 1));