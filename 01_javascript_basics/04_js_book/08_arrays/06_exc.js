let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr){
  let number_array = arr.map( function(element){
    return element.length;
  })

  return number_array.filter( number => number % 2 !== 0);
}

console.log(oddLengths(arr)); // => [1, 5, 3]