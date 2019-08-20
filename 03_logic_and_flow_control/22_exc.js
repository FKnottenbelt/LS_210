function rotateLowercase(char, offset) {
  const LOWER = { min: 97, max: 122 };
  let newChar = char.charCodeAt(0) + offset;

  if (newChar > LOWER.max) {
    newChar = (LOWER.min - 1) + (newChar - LOWER.max);
  }
  return String.fromCharCode(newChar);
}

function rotateUpcase(char, offset) {
  const CAPS = { min: 65, max: 90 };
  let newChar = char.charCodeAt(0) + offset;

  if (newChar > CAPS.max) {
    newChar = (CAPS.min - 1) + (newChar - CAPS.max);
  }
  return String.fromCharCode(newChar);
}

function rot13(string) {
  const CONVERSION_OFFSET = 13;
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i].match(/[a-z]/)) {
      result += rotateLowercase(string[i], CONVERSION_OFFSET);
    } else if (string[i].match(/[A-Z]/)) {
      result += rotateUpcase(string[i], CONVERSION_OFFSET);
    } else {
      result += string[i];
    }
  }

  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.


// console.log('a'.charCodeAt(0)); //97
// console.log('z'.charCodeAt(0)); // 122
// console.log('A'.charCodeAt(0)); // 65
// console.log('Z'.charCodeAt(0)); // 90
