function indexOf(firstString, secondString) {
  return firstString.indexOf(secondString);
}

function lastIndexOf(firstString, secondString) {
  return firstString.lastIndexOf(secondString);
}

console.log(indexOf('Some strings', 's')); // 5
console.log(indexOf('Blue Whale', 'Whale')); // 5
console.log(indexOf('Blue Whale', 'Blute')); // -1
console.log(indexOf('Blue Whale', 'leB')); // -1

console.log(lastIndexOf('Some strings', 's')); // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale')); // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all')); // -1
