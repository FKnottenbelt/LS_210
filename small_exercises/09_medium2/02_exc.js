function invalid(triangle) {
  const valid = (triangle[0] + triangle[1] > triangle[2])
    && !triangle.includes(0);

  return !valid;
}

function equilateral(triangle) {
  return triangle[0] === triangle[1] && triangle[1] === triangle[2];
}

function isosceles(triangle) {
  return triangle[0] === triangle[1] || triangle[1] === triangle[2];
}

function scalene(triangle) {
  return triangle[0] !== triangle[1] && triangle[1] !== triangle[2];
}

function triangle(side1, side2, side3) {
  const triangle = [side1, side2, side3].sort((a, b) => a - b);

  if (invalid(triangle)) return 'invalid';
  if (equilateral(triangle)) return 'equilateral';
  if (isosceles(triangle)) return 'isosceles';
  if (scalene(triangle)) return 'scalene';
  return 'unknown';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(1, 1));        // "invalid"
