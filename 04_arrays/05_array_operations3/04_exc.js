function join(array, seperator) {
  let result = '';
  for (let i = 0; i < array.length; i += 1) {
    if (i === array.length - 1) {
      result += array[i];
    } else {
      result += array[i] + seperator;
    }
  }
  return result;
}


console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
