/***********
  range
***********/
function* range(start, end) {
  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}

// usage:
// console.log([...range(1, 5)]);

// for (let num of range(1,5)) console.log(num);