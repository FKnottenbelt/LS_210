function uniqueElements(arr) {
  const result = [];
  arr.forEach((element) => {
    if (!result.includes(element)) result.push(element);
  });
  return result;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));
// returns [1, 2, 4, 3, 5]
