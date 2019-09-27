function logArgs() {
  // var args = Array.prototype.slice.call(arguments);
  const args = [...arguments];
  console.log(typeof args);
  console.log(Array.isArray(args));
  const a = args.pop();
}

logArgs(1, 2);

// eslint prefers rest parameter syntax: (...args). ES6:
function logArgs2(...args) {
  console.log(typeof args);
  console.log(Array.isArray(args));
  const a = args.pop();
}

logArgs2(1, 2);

