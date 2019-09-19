function slice(array, begin, end) {
  if (begin > array.length) begin = array.length;
  if (end > array.length) end = array.length;
  if (end < begin) return [];

  const result = [];
  for (let i = begin; i < end; i += 1) {
    result.push(array[i]);
  }

  return result;
}

function insert(array, start, newElement) {
  array.length += 1;
  for (let i = array.length - 1; i > start; i -= 1) {
    array[i] = array[i - 1];
  }
  array[start] = newElement;
}

function splice(array, start, deleteCount, element1, elementN) {
  const len = array.length;
  if (start > len) start = len;
  if (deleteCount > (len - start)) deleteCount = len - start;

  const removed = [];
  for (let i = start; i < (start + deleteCount); i += 1) {
    removed.push(array[i]);
  }

  for (let i = (start + deleteCount); i < len; i += 1) {
    array[i - deleteCount] = array[i];
  }
  array.length -= deleteCount;

  if (elementN) insert(array, start, elementN);
  if (element1) insert(array, start, element1);

  return removed;
}

console.log(slice([1, 2, 3], 1, 2)); // [2]
console.log(slice([1, 2, 3], 2, 0)); // []
console.log(slice([1, 2, 3], 5, 1)); // []
console.log(slice([1, 2, 3], 0, 5)); // [1, 2, 3]

let arr = [1, 2, 3];
console.log(slice(arr, 1, 3)); // [2, 3]
console.log(arr); // [1, 2, 3]

console.log('---------');
console.log(splice([1, 2, 3], 1, 2)); // [2, 3]
console.log(splice([1, 2, 3], 1, 3)); // [2, 3]
console.log(splice([1, 2, 3], 1, 0)); // []
console.log(splice([1, 2, 3], 0, 1)); // [1]
console.log(splice([1, 2, 3], 1, 0, 'a')); // []

console.log('---------');

arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two')); // [2]
console.log(arr); // [1, "two", 3]

arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three')); // [2, 3]
console.log(arr); // [1, "two", "three"]

arr = [1, 2, 3];
console.log(splice(arr, 1, 0)); // []
console.log(splice(arr, 1, 0, 'a')); // []
console.log(arr); // [1, "a", 2, 3]

arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a')); // []
console.log(arr); // ["a", 1, 2, 3]
