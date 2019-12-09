function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array === []) return [];

  const workingArray = array.slice();
  workingArray.push(workingArray.shift());
  return workingArray;
}

function rotateRightmostDigits(number, digits) {
  const array = number.toString().split('');
  const firstPart = array.slice(0, array.length - digits);
  let rotatingPart = array.slice(-digits);
  rotatingPart = rotateArray(rotatingPart);

  return Number(firstPart.concat(rotatingPart).join(''));
}

function maxRotation(number) {
  let digits = String(number).length;
  for (let i = digits; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
