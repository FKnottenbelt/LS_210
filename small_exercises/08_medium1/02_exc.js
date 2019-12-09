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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735 912
console.log(rotateRightmostDigits(735291, 4));      // 73 2915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
