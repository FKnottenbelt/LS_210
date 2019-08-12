function* range(start, end) {
  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}

function multiplesOfThreeAndFive() {
  const array = [...range(1, 100)];

  array.forEach((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(`${num}!`);
    } else if (num % 3 === 0 || num % 5 === 0) {
      console.log(String(num));
    }
  });
}

multiplesOfThreeAndFive();

// LS
function multiplesOfThreeAndFive() {
  var i;
  for (i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(String(i) + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(String(i));
    }
  }
}

// refactored

function multiplesOfThreeAndFive2(start, end) {
  for (let i = start; i < end; i += 1){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}!`);
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive2(1, 100);