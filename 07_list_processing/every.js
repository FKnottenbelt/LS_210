function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (func(array[i]) === false) {
      return false;
    }
  }

  return true;
}

var isAString = function (value) {
  return typeof value === 'string';
};

console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true