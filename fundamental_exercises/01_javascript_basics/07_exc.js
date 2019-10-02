function stringToInteger(string) {
  const LOOKUP = { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
                   '7': 7, '8': 8, '9':9 };
  let int = 0;
  string.split('').forEach( (num) => {
    int = (int * 10) + LOOKUP[num];
  });
  return int;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570

