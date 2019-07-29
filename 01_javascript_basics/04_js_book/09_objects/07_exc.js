let objToCopy = {
  foo: 1,
  bar: 2,
};

function copySelectedKeys(obj, keysArray){
  let newObj = {};

  keysArray.forEach( key =>
    newObj[key] = obj[key]);

  return newObj;
}

function copyObj(obj, keysArray = []){
  if (keysArray.length === 0){
    return Object.create(obj);
  } else {
    return copySelectedKeys(obj, keysArray);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined