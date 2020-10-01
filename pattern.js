function generatePattern(nstars) {
  for (let line = 1; line <= nstars; line++) {
    let numbers = '';
    for (let current = 1; current <= line; current++) {
      numbers = numbers.concat(current);
    }
    console.log(`${numbers}${"*".repeat(nstars - line)}`);
  }
}

generatePattern(20);