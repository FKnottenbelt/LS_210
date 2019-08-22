function reverse(array) {
  let result = [];

  for (let i = array.length - 1; i >= 0; i -= 1) {
    result.push(array[i]);
  }

  return result;
}

console.log(reverse(['a','b','c']));
