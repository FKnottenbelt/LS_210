function mirroredArray(array) {
  const result = array.slice();
  for (let i = array.length - 1; i >= 0; i -= 1) {
    result.push(array[i]);
  }

  return result;
}

console.log(mirroredArray([1, 2, 3]));
