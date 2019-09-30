var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    console.log('index value',i, myArray[i]);
    sum += array[i];
  }

  console.log(array);
  return sum / array.length;
}

console.log(average(myArray));


// index value -2 5
// index value -1 5
// index value 0 5
// index value 1 5
// [ 5, 5, '-1': 5, '-2': 5 ]
// 10