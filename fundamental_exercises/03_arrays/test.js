function sortedString(arr) {
  console.log('arr ', arr);
  console.log('arr.slice().sort() ', arr.slice().sort());
  console.log('JSON.stringfy', JSON.stringify(arr.slice().sort()) );
  console.log('to_string.split()', arr.slice().sort().toString().split(',') );
  return JSON.stringify(arr.slice().sort());
}

function areArraysEqual(array1, array2) {
  return sortedString(array1) === sortedString(array2);
}


console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([10, 2, 3], [3, 2, 10]));