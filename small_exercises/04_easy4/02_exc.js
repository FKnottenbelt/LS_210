function union(arr1, arr2) {
  const result = arr1.slice();

  arr2.forEach((num) => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]