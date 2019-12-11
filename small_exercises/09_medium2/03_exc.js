function triangle(angleA, angleB, angleC) {
  [angleA, angleB, angleC] = [angleA, angleB, angleC].sort((a, b) => a - b);

  if (angleA + angleB + angleC !== 180 || angleA <= 0) return 'invalid';
  if (angleC === 90) return 'right';
  if (angleC < 90) return 'acute';
  if (angleC > 90) return 'obtuse';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));     // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));      // "invalid"
