function convertChar(char) {
  const CONVERSION_OFFSET = 32;
  let asciiNumeric = char.charCodeAt(0);

  asciiNumeric += CONVERSION_OFFSET;
  return String.fromCharCode(asciiNumeric);
}

function isUppercase(char) {
  return (char >= 'A' && char <= 'Z') ? true : false;
}

function toLowerCase(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isUppercase(string[i])) {
      result += convertChar(string[i]);
    } else {
      result += string[i];
    }
  }

  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"

console.log(convertChar('A'));  // a


## ls
function toLowerCase(string) {
  var CONVERSION_OFFSET = 32;
  var newString = '';
  var charCode;
  var i;

  for (i = 0; i < string.length; i += 1) {
    charCode = string.charCodeAt(i);

    if (string[i] >= 'A' && string[i] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}