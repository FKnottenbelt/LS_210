// snippet 1
{
  var foo = "Hello";
}

console.log(foo);   // logs "Hello"

if (true) {
  var bar = "World";
}

console.log(bar); // logs "World"


// snippet 2
{
   let foo = "Hello";
}

console.log(foo);   // ReferenceError: foo is not defined

if (true) {
  let bar = "World";
}

console.log(bar); // ReferenceError: bar is not defined