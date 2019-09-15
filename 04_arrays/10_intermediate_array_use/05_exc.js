function matrixSums(arr) {
  const result = [];
  arr.forEach((subarr) => {
    result.push(subarr.reduce((total, value) => total + value));
  });
  return result;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));
// returns [15, 60, 12]
