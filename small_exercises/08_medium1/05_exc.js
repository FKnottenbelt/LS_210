function wordToDigit(string) {
  const numbers = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6,
                    seven: 9, eight: 8, nine: 9, zero: 0};

  Object.keys(numbers).forEach((number) => {
    let regex = new RegExp('\\b'+number+'\\b', 'g');
    string = string.replace(regex, numbers[number]);
  });
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('hello there two')); //  'hello there 2'
console.log(wordToDigit('hello there 2')); //  'hello there 2'
console.log(wordToDigit('')); //  ''
console.log(wordToDigit('The weight is done.')); //  ''
