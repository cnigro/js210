function toLowerCase(words) {
  let lowerString = '';
  for (let i = 0; i < words.length; i++) {
    let ascii = words.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      lowerString += String.fromCharCode(ascii + 32);
    } else {
      lowerString += words[i];
    }
  }
  console.log(lowerString);
  // return lowerString
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"