// function runningTotal(array) {
//   const result = [];
//   let sum = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     result.push(sum += array[i]);
//   }

//   return result;
// }

function runningTotal(array) {
  let sum = 0;
  return array.map(number => sum += number);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
