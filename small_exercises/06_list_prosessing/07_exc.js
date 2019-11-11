function substrings(string) {
  const result = [];

  for (let outer = 0; outer < string.length; outer += 1) {
    for (let inner = outer; inner < string.length; inner += 1) {
      const substring = string.slice(outer, inner + 1);
      result.push(substring);
    }
  }
  return result;
}

function isPalindrome(string) {
  if (string.length <= 1) return false;
  return string === string.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


