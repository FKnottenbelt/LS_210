function staggeredCase(string) {
  let toggle = 'caps';
  return string.split('').map((char) => {
    if (char.match(/[^a-z]/gi)) return char;

    if (toggle === 'caps') {
      toggle = 'low';
      return char.toUpperCase();
    }

    toggle = 'caps';
    return char.toLowerCase();
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
