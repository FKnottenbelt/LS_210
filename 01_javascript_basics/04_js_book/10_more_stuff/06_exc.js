let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];


function logMatch(array, matchValue){
  array.forEach( word => {
    if (word.match(matchValue)){
      console.log( `${word}` );
    }
  });
}


logMatch(words, /lab/);

// Output
// 'laboratory'
// 'flab'
// 'elaborate'