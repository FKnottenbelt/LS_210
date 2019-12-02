const BAD_NUMBER = '0'.repeat(10);

function cleaner(string) {
  if (!string) return BAD_NUMBER;

  const result = String(string).match(/[0-9]/g).join('');
  const digits = result.length;

  if (digits === 10) return result;
  if (digits === 11 && result[0] === '1') return result.slice(1);
  return BAD_NUMBER;
}

console.log(cleaner('34-4(3-a345098') === '3443345098');
console.log(cleaner('344') === '0000000000');
console.log(cleaner('3454367382') === '3454367382');
console.log(cleaner('13454367382') === '3454367382');
console.log(cleaner('23454367382') === '0000000000');
console.log(cleaner('123454367382') === '0000000000');
console.log(cleaner('') === '0000000000');
console.log(cleaner(3454367382) === '3454367382');
