function myForEach(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    console.log('array[i]', array[i],  ' array ', array);
    func(array[i], array);
  }
}

var min = Infinity;
var getMin = function (value) {
  console.log('min ',min);
  console.log('value ', value);
  console.log('uitslag ', (value <= min ? value : min));
  min = value <= min ? value : min;  // min krijgt waarde van uitslag
};

myForEach([4, 5, 12, 23, 3], getMin);    // undefined
console.log(min);                        // 3

//output
array[i] 4  array  [ 4, 5, 12, 23, 3 ]
min  Infinity
value  4
uitslag  4
array[i] 5  array  [ 4, 5, 12, 23, 3 ]
min  4
value  5
uitslag  4
array[i] 12  array  [ 4, 5, 12, 23, 3 ]
min  4
value  12
uitslag  4
array[i] 23  array  [ 4, 5, 12, 23, 3 ]
min  4
value  23
uitslag  4
array[i] 3  array  [ 4, 5, 12, 23, 3 ]
min  4
value  3
uitslag  3
3