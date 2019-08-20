let phrase = prompt('Please enter a phrase:');

let numOfChars = phrase.length;

console.log(`There are ${numOfChars} characters in "${phrase}".`);

let noSpaces = phrase.replace(/ /g, "").length;

console.log(`There are ${noSpaces} characters in "${phrase}" when not counting spaces`);