function formatPercentage(percentage) {
  return percentage.toFixed(2);
}

function letterPercentages(string) {
  const result = { lowercase: '0', uppercase: '0', neither: '0' };
  const total = Number(string.length);
  const lowerCase = string.match(/[a-z]/g) || [];
  const upperCase = string.match(/[A-Z]/g) || [];
  const neither = string.match(/[^a-zA-Z]/g) || [];

  result.lowercase = formatPercentage((100 / total) * lowerCase.length);
  result.uppercase = formatPercentage((100 / total) * upperCase.length);
  result.neither = formatPercentage((100 / total) * neither.length);

  return result;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
