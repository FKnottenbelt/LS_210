function isPalindrome(string) {
  const reversed = string.split('').reverse().join('');
  return string === reversed;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
