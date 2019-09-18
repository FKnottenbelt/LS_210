const myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myArray, myOtherArray);

// alternative
const myArray2 = [1, 2, 3, 4];
const myOtherArray2 = [];

myArray2.forEach((num) => {
  myOtherArray2.push(num);
});

myArray2.pop();
console.log(myArray2, myOtherArray2);
