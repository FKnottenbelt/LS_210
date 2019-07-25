let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];


let result = [];

myArray.forEach(function(subarray){
  result.push(
    subarray.filter( number => number % 2 === 0)
   );
});

console.log(result.toString());

// LS
myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value); // => 6, 4, 2, 4, 16, 0
    }
  });
});