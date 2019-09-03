function findFibonacciIndexByLength(num) {
  let [first, last] = [0 , 1];
  let index = 1;

  do {
    [first, last] = [last, first + last];
    index += 1;
  } while (String(last).length < num );

  return index;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
