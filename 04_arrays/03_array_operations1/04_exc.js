function shift(array) {
  const result = array[0];
  for (let i = 0; i < array.length - 1; i += 1) {
    array[i] = array[i + 1];
  }

  array.length -= 1;
  return result;
}

const count = [1, 2, 3];
console.log(shift(count)); // 1
console.log(count); // [ 2, 3 ]
