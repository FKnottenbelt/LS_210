function generatePattern(number) {
  let stars = number - 1;
  let numberString = '';

  for (let i = 1; i <= number; i += 1, stars -= 1) {
    numberString += String(i);
    console.log(numberString + '*'.repeat(stars));
  }
}

generatePattern(7);
