function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false };
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true };
       }
    };
    return rangeIterator;
}

let it = makeRangeIterator(1, 10, 2);

console.log(it); // { next: [Function: next] }
let result = it.next();
console.log(result); // { value: 1, done: false }

while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

