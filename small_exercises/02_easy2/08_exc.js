function getGrade(score1, score2, score3) {
  const mean = (score1 + score2 + score3) / 3;

  if (mean < 60) return 'F';
  if (mean < 70) return 'D';
  if (mean < 80) return 'C';
  if (mean < 90) return 'B';
  return 'A';
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
