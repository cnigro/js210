function trim(words) {
  let trimmed = '';
  let firstLetterSeen = 0;
  let lastLetterSeen = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== ' ') {
      firstLetterSeen = i;
      break;
    } 
  }

  for (let j = words.length - 1; j > firstLetterSeen; j--) {
    if (words[j] !== ' ') {
      lastLetterSeen = j + 1;
      break;
    }
  }

  for (let k = firstLetterSeen; k < lastLetterSeen; k++) {
    trimmed += words[k];
  }

  return trimmed;
}

trim('     This is the string     ');