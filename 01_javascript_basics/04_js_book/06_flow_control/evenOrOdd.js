function evenOrOdd(number) {
  if (!Number.isInteger(number)){
    console.log(`${number} is not an integer.`);
    return;
  };

  let remainder = number % 2;

  if (remainder == 0){
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}


evenOrOdd(2);
evenOrOdd('text');
evenOrOdd(7);