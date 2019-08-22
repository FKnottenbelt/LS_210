function join(array) {
  let result = '';

  for (let i = 0; i < array.length; i += 1) {
    result += String(array[i]);
  }
  return result;
}

console.log(join([1, 'a', 4]));