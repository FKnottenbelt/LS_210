function indexOf(firstString, secondString) {
  const match = firstString.match(secondString);
  let result;

  if (match) {
    result = match.index;
  } else {
    result = -1;
  }

  return result;
}

function lastIndexOf(firstString, secondString) {
  const regex = new RegExp(secondString, 'g');
  let lastIndex;

  while ((regex.exec(firstString)) !== null) {
    lastIndex = regex.lastIndex - secondString.length;
  }

  return lastIndex === undefined ? -1 : lastIndex;
}


console.log(indexOf('Some strings', 's')); // 5
console.log(indexOf('Blue Whale', 'Whale')); // 5
console.log(indexOf('Blue Whale', 'Blute')); // -1
console.log(indexOf('Blue Whale', 'leB')); // -1

console.log(lastIndexOf('Some strings', 's')); // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale')); // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all')); // -1
