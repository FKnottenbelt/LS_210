function sumSquareDifference(num) {
  let sum = 0;
  let square = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
    square += (i ** 2);
  }

  return (sum ** 2) - square;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150