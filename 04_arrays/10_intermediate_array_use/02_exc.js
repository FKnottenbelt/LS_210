function combinedArray(even, odd) {
  const result = [];
  const len = even.length;
  for (let i = 0; i < len; i += 1) {
    result.push(even.shift());
    result.push(odd.shift());
  }
  return result;
}

const digits = [4, 8, 15, 16, 23, 42];
const letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));
// returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]
