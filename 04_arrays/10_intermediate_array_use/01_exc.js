function oddElementsOf(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 1) result.push(arr[i]);
  }
  return result;
}

const digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits)); // returns [8, 16, 42]
