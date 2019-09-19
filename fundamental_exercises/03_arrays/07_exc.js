function shift(array) {
  if (array.length === 0) return undefined;
  const first = array[0];

  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i + 1];
  }
  array.length -= 1;

  return first;
}

function unshift(array, ...args) {

  for (let argIndex = args.length - 1; argIndex >= 0; argIndex -= 1) {
    for (let i = array.length; i >= 0; i -= 1) {
      array[i] = array[i - 1];
    }
    array[0] = args[argIndex];
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log('-----');

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

console.log('-----');

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                      // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
