function logOddNumbers(number) {
  for (let i = 1; i <= number; i += 1) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logOddNumbers(19);
