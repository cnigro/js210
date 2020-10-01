function rot13(string) {
  let rotated = '';
  const OFFSET = 13;
  const LOWER_A = 97;
  const LOWER_Z = 122;
  const UPPER_A = 65;
  const UPPER_Z = 90

  for (let i = 0; i < string.length; i++) {
    let ascii = string.charCodeAt(i);

    if ((ascii >= UPPER_A && ascii < UPPER_Z - OFFSET) || 
        (ascii >= LOWER_A && ascii < LOWER_Z - OFFSET)) {
      rotated += String.fromCharCode(ascii + OFFSET);
    } else if ((ascii > UPPER_Z - OFFSET && ascii < UPPER_Z) || 
               (ascii > LOWER_Z - OFFSET && ascii < LOWER_Z)) {
      rotated += String.fromCharCode(ascii - OFFSET);
    } else {
      rotated += String.fromCharCode(ascii);
    }
  }
  return rotated;
}

console.log(rot13('In a hole in the ground there lived a hobbit.'));
console.log(rot13(rot13('In a hole in the ground there lived a hobbit.')));