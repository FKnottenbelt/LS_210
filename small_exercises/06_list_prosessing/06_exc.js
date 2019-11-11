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


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
