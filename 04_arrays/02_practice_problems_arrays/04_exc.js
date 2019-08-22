function firstInstance(searchValue, array){
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === searchValue) {
      return i;
    }
  }
  return -1;
}

console.log(firstInstance(2, [1, 2, 3, 2]));
console.log(firstInstance(6, [1, 2, 3, 2]));
