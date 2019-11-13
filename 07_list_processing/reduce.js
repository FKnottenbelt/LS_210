function myReduce(array, func, initial) {
  const startValue = initial || array[0];
  let accumulator = startValue;

  for (let i = 0; i < array.length; i += 1) {
    accumulator = func(accumulator, array[i]);
  }

  return accumulator;
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49