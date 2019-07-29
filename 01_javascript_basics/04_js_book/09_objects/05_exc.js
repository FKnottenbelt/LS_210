let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myChild = Object.create(myProtoObj);

console.log(myChild.bar);