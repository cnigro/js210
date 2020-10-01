function logOddNumbers(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(i);
    } 
  }
}

function logOddsWithoutConditional(num) {
  for (let i = 1; i <= num; i += 2) {
    console.log(i);
  }
}

function logOddsWithContinue(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      continue;
    }

    console.log(i);
  }
}

logOddNumbers(19);
logOddsWithoutConditional(19);
logOddsWithContinue(19);