// Write a function that takes a number argument, and returns true if the number
// is prime, or false if it is not.

// You may assume that the input is always a non-negative integer.

function isPrime(num) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  for(let i = 3; i < num; i += 2) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}