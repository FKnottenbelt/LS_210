const studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;
const GRADE_TABLE = {
  A: { min: 93, max: 100 },
  B: { min: 85, max: 92 },
  C: { min: 77, max: 84 },
  D: { min: 69, max: 76 },
  E: { min: 60, max: 68 },
  F: { min: 0, max: 59 },
};

function getLetterGrade(precentageGrade) {
  let result = '';
  const numGrade = Math.round(precentageGrade);

  Object.entries(GRADE_TABLE).forEach((record) => {
    if (numGrade >= record[1].min && numGrade <= record[1].max) {
      result = record[0];
    }
  });

  return result;
}

function calculateGrade(student) {
  const { exams } = student[1].scores;
  const examAvg = exams.reduce((sum, value) => sum + value) / exams.length;
  const exc = student[1].scores.exercises;
  const excSum = exc.reduce((sum, value) => sum + value);
  const weightedExam = examAvg * EXAM_WEIGHT;
  const weightedExc = excSum * EXERCISE_WEIGHT;
  const grade = weightedExam + weightedExc;
  const letterGrade = getLetterGrade(grade);

  const formattedGrade = `${Math.round(grade)} (${letterGrade})`;
  return formattedGrade;
}

function generateClassRecordSummary(scores) {
  const classRecord = {
    studentGrades: [],
  };

  const students = Object.entries(scores);

  students.forEach((student) => {
    classRecord.studentGrades.push(calculateGrade(student));
  });

  return classRecord;
}


console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
// }
