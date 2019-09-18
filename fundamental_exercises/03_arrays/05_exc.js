function pop(array) {
  if (array.length === 0) return undefined;

  const lastValue = array[array.length - 1];
  array.length -= 1;

  return lastValue;
}

function push(array, ...args) {
  for (let i = 0; i < args.length; i += 1) {
    array[array.length] = args[i];
  }

  return array.length;
}

// pop
let array = [1, 2, 3];
console.log(pop(array)); // 3
console.log(array); // [1, 2]
console.log(pop([])); // undefined
console.log(pop([1, 2, ['a', 'b', 'c']])); // ["a", "b", "c"]

console.log('------');
// push
array = [1, 2, 3];
console.log(push(array, 4, 5, 6)); // 6
console.log(array); // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b'])); // 3
console.log(push([], 1)); // 1
console.log(push([]));
