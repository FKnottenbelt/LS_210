function splice(array, start, no_of_values) {
  let outtake = [];
  let counter = 1;
  let end = start + no_of_values - 1;
  let new_length = array.length - no_of_values;

  for (let i = 0; i < array.length; i += 1) {
    if (i >= start & i <= end) {
      outtake.push(array[i]);
      array[i] = array[end + counter];
      counter += 1;
    }
  }
  array.length = new_length;
  return outtake;
}



const count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]