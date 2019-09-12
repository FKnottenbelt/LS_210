function concat(firstArray, secondArray) {
  const newArray = [];

  for (let i = 0; i < firstArray.length; i += 1) {
    newArray.push(firstArray[i]);
  }

  for (let i = 0; i < secondArray.length; i += 1) {
    newArray.push(secondArray[i]);
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
