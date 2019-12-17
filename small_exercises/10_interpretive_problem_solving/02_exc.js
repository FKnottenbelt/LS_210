function diamond(n) {
  const lines = [];
  for (let stars = 1; stars <= n; stars += 2) {
    const spaces = (n - stars) / 2;
    const line = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
    lines.push(line);
  }

  lines.forEach(line => console.log(line));
  lines.pop();
  lines.reverse().forEach(line => console.log(line));
}


diamond(1);
console.log('-------------');
diamond(3);
console.log('-------------');
diamond(9);
