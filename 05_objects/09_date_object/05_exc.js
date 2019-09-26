function dateSuffix(day) {
  const stringDay = String(day);
  if (stringDay.match(/(11|12|13)$/)) return 'th';
  if (stringDay.endsWith(1)) return 'st';
  if (stringDay.endsWith(2)) return 'nd';
  if (stringDay.endsWith(3)) return 'rd';
  return "th";
}

console.log(dateSuffix(19)); //th
console.log(dateSuffix(23)); //rd