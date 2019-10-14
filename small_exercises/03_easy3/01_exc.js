function getRandomIntInclusive(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomAge = getRandomIntInclusive(20, 200);

console.log(`Teddy is ${randomAge} years old`);
