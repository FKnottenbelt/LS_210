function substringsAtStart(string) {
  const arr = string.split('');
  const result = arr.map((char, index) => {
    return arr.slice(0, index + 1).reduce((sum, value) => sum += value);
  });

  return result;
}


console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
