function flatten(array) {
   return array.join().split(',');
}

function buyFruit(list) {
  const newList = list.map((item) => {
    const repeated = [];
    for (let i = 0 ; i < item[1]; i += 1) {
      repeated.push(item[0]);
    }
    return repeated;
  });

  return flatten(newList);
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]