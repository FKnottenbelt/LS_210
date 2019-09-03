function triangle(num) {
  let result = ' ';

  for (let i = 1; i <= num ; i += 1) {
    result = ' '.repeat(num - i) + '*'.repeat(i);
    console.log(result);
  }
}

triangle(5);
triangle(9);
