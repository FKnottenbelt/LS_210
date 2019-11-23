function isBalanced(string) {
  let open = 0;
  string.split('').forEach( (char) => {
    if (char === '(') open += 1;
    if (char === ')') open -= 1;
    if (open < 0) open = NaN;
  });

  return open === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false