function wordCount(string) {
  const result = {};
  string.split(' ').forEach((word) => {
    if (!result[word]) result[word] = 0;
    result[word] += 1;
  });
  return result;
}


console.log(wordCount('box car cat bag box'));
// { box: 2, car: 1, cat: 1, bag: 1 }
