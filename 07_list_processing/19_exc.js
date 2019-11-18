function anagram(word, list) {
  const wordArray = word.split('').sort().join('');
  return list.filter(item => (item.split('').sort().join('') === wordArray));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
