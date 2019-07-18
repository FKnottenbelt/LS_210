function evenOrOdd(number) {
  let remainder = number % 2;

  if (remainder == 0){
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}


evenOrOdd(2);
evenOrOdd(7);