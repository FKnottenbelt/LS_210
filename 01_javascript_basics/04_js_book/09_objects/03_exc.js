let myArray = { 0: 'first', 1: 'second', 2: 'third'
};

let myArrayLength = Object.keys(myArray).length;

for (let i = 0; i < myArrayLength; i += 1) {
  console.log(myArray[i]);
}