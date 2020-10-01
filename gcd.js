function gcd(a, b) {
  let remainder;

  while(remainder !== 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

function gcdRecurse(num_array) {
  if (num_array.length < 2 || num_array[0]) {
    console.log(num_array[0]);
    return num_array[0];
  }

  let remainder;
  let a = num_array.shift();
  let b = num_array.shift();

  while(remainder !== 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }

  num_array.push(remainder);

  gcdRecurse(num_array);
}

// gcd(12, 4);   // 4
// gcd(15, 10);  // 5
// gcd(9, 2);    // 1
// gcd(gcd(12, 4), 8);

gcdRecurse([100, 72, 65, 33, 17]);