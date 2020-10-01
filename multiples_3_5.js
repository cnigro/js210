function multiplesOfThreeAndFive(begin, end) {
  for(let i = begin; i <= end; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
      console.log(String(i) + '!');
    } else if (i % 5 === 0 || i % 3 === 0) {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive(30, 75);