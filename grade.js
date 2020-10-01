function getAverage() {
  
}

let average = 0;
let rlSync = require('readline-sync');

for (let i = 1; i <= 3; i++) {
  average += Number(rlSync.question("Enter score ${i}: "));
}

average /= 3;
let grade;

if (average >= 90) {
  grade = 'A'
} else if (average >= 80 && average < 90) {
  grade = 'B'
} else if (average >= 70 && average < 80) {
  grade = 'C'
} else if (average >= 60 && average < 70) {
  grade = 'D'
} else {
  grade = 'F'
}

console.log(`Based on the agerage of your 3 scores, your letter grade is ${grade}`);