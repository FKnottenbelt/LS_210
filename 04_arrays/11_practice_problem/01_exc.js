function* range(begin, end) {
  for (let i = begin; i <= end; i += 1) {
    yield i;
  }
}

function missing(array) {
  const begin = array[0];
  const end = array.slice(-1);
  const missingNumber = [];

  for (let num of range(begin, end)) {
    if (!array.includes(num)) missingNumber.push(num);
  }
  return missingNumber;
}


console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
