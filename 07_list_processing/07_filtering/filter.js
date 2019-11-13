function myFilter(array, func) {
  const result = [];
  array.forEach((hash) => {
    if (func(hash)) {
      result.push(hash);
    }
  });
  return result;
}

var isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(
myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple)
          );

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]