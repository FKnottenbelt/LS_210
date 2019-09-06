function centuryEnding(stringCentury) {
  if (stringCentury.match(/(11|12|13)$/)) return 'th';
  if (stringCentury.endsWith(1)) return 'st';
  if (stringCentury.endsWith(2)) return 'nd';
  if (stringCentury.endsWith(3)) return 'rd';
  return 'th';
}

function century(year) {
  const cent = Math.ceil(year / 100);
  return cent + centuryEnding(String(cent));
}

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
