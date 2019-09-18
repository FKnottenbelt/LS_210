function concat() {
  const result = [];

  Object.values(arguments).forEach((arg) => {
    if (Array.isArray(arg)) {
      arg.forEach(element => result.push(element));
    } else {
      result.push(arg);
    }
  });

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two'])); // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4)); // [1, 2, "three", 4]

// alterative
function concat(...args) {
  const result = [];

  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      arg.forEach(element => result.push(element));
    } else {
      result.push(arg);
    }
  });

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
