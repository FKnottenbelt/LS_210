function allCaps(string){
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(allCaps('hello world'));
console.log(allCaps('goodbye'));