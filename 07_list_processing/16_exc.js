function totalArea(rectangles) {
  const widths = rectangles.map((rectangle) => rectangle[0] * rectangle[1]);
  const sum = widths.reduce((sum, value) => sum += value);
  return sum;
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));    // 141

function isSquare(rectangle) {
   return rectangle[0] === rectangle[1];
}

function totalSquareArea(rectangles) {
  const squares = rectangles.filter(isSquare);
  return totalArea(squares);
}

rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalSquareArea(rectangles));    // 121
