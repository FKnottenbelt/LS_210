function reverse(inputForReversal) {
  const len = inputForReversal.length;
  let result = [];

  for (let i = len - 1; i >= 0; i -= 1) {
    result.push(inputForReversal[i]);
  }

  if (typeof inputForReversal === 'string') {
    result = result.join('');
  }

  return result;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
