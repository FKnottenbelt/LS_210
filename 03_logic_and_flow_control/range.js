function* range(start, end) {
  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}

let myRange = range(2, 7); // -> Object [Generator] {}



// Generators are pausable functions that can create sequences of values,
// where each value is only returned by explicitly calling the generator
// (notice the familiar `yield` keyword instead of a normal return). This
// has the advantage that the range is very memory-efficient because it yields
// its values individually (just like the original Ruby object). Using the
// spread operator, we can still generate a normal array from it, but we
// can also use the range values inside of a `for .. of` loop. (edited)

for (let num of myRange) console.log(num);
// 2
// 3
// etc

console.log([...range(2, 7)]);  // spread notation (= ca all of the range)
// [ 2, 3, 4, 5, 6, 7 ]
// nb: apparently spread notation is slow.


//also slow
Array.from({ length: 20 }, (v, k) => k + 1);
Array.from(new Array(20), (x,i) => i+1);


function* range2(start, end) {
  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}

console.log([...range2(1, 5)]);

for (let num of range2(1,5)) console.log(num);