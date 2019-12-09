function fibonacci(n) {
  let first = 1;
  let last = 1;

  for (let i = 3; i <= n; i += 1 ) {
    [first, last] = [last, first + last];
  }
  return last;
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050