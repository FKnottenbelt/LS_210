function* range(start, end) {
  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}

function generatePattern(number) {
  const rowLength = [...range(1, number)].join('').length;
  let numberString = '';

  for (let i = 1; i <= number; i += 1) {
    numberString += String(i);
    const row = numberString.padEnd(rowLength, '*');
    console.log(row);
  }
}

generatePattern(20);
