function bubbleSort(array) {
  let count = 0;
  do {
    count = 0;

    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        count += 1;
      }
    }

  } while (count > 0);
  return array;
}

let array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
