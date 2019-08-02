let apples = 3;
let bananas = '3';

if (apples === bananas) {
  console.log('true');
} else {
  if (apples == bananas) {
    console.log('Same value, but different types');
  }
  else {
    console.log('Not strictly equal');
  }
}
