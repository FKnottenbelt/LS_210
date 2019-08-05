function average(array) {
  let total = 0;
  array.forEach( number => {
    total += number;
  });
  return total / Object.keys(array).length;
}

let numbers = [1, 3, 5];
console.log(average(numbers));

numbers = [1, 3, 5, 6, 8];
console.log(average(numbers));