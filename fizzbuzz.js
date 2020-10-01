function fizzbuzz(begin, end) {
  for(let i = begin; i <= end; i++) {
    let message = '';

    if (i % 3 === 0) {
      message += 'Fizz';
    }

    if (i % 5 === 0) {
      message += 'Buzz';
    }

    console.log(message || i);
  }
}

fizzbuzz(1, 100);

