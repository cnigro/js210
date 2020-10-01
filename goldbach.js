let isPrime = function(number) {
  if (number < 2) {
    return false;
  }

  for (let first = 2; first < number; first++) {
    if (number % first === 0) {
      return false;
    }
  }

  return true;
}


let checkGoldbach = function (expectedSum) {
  if (expectedSum % 2 === 1  || expectedSum < 4) {
    console.log(null);
    return;
  }

  let num1 = 1;
  let num2;

  do {
    num1 += 1;
    num2 = expectedSum - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2)
    }
  } while (num1 !== num2);
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);