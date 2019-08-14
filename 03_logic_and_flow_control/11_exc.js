function gcd(num1, num2) {
  const smallest = Math.min(num1, num2);

  for (let i = smallest; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}

console.log(gcd(12, 4)); // 4
console.log(gcd(15, 10)); // 5
console.log(gcd(9, 2)); // 1
