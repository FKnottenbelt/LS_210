function multiplyAllPairs(arr1, arr2) {
  const result = [];
  for (let inner = 0; inner < arr1.length; inner += 1) {
    for (let outer = 0; outer < arr2.length; outer += 1) {
      result.push(arr1[inner] * arr2[outer]);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
