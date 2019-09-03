const ask = require('readline-sync');

const noun = ask.question('Enter a noun:\n');
const verb = ask.question('Enter a verb:\n');
const adjective = ask.question('Enter a adjective:\n');
const adverb = ask.question('Enter a adverb:\n');

const result = `Do you ${verb} your ${adjective} ${noun} ${adverb}? \
That is hilarous!`;

console.log(result);
