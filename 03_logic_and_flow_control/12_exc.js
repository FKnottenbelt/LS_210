function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(number) {
  if (number % 2 === 1 || number < 4) {
    return null;
  }

  const half = number / 2;

  for (let i = 4; i <= half; i += 1) {
    if (isPrime(i)) {
      const secondNumber = number - i;
      if (isPrime(secondNumber)) {
        const smallest = Math.min(i, secondNumber);
        const biggest = Math.max(i, secondNumber);
        console.log(smallest, biggest);
      }
    }
  }

  return undefined;
}

checkGoldbach(3);
console.log('---');
checkGoldbach(4);
console.log('---');
checkGoldbach(12);
console.log('---');
checkGoldbach(100);
