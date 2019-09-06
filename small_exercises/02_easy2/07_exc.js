function isDouble(num) {
  const stringNum = String(num);
  const strLength = stringNum.length;

  if (strLength % 2 === 0) {
    const half = strLength / 2;
     return stringNum.substring(0, half) ===
            stringNum.substring(half, strLength);
  }
  return false;
}

function twice(num) {
  if (isDouble(num)) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
