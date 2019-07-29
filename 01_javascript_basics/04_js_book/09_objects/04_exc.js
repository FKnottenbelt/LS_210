let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let myArray = Object.keys(obj).map(element => element.toUpperCase());

console.log(myArray);
console.log(obj);