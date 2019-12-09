function fibonacci(n, cache = { 1: 1, 2: 1 } ) {
  return cache[n] || (cache[n] = fibonacci(n - 2) + fibonacci(n - 1));
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765


function fibonacci(num, values = { 1: 1, 2: 1 }) {
  if (values[num]) {
    return values[num];
  }
  values[num - 1] = values[num - 1] || fibonacci(num - 1, values);
  return values[num - 1] + values[num - 2];
}