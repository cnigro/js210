function startsWith(str, searchStr) {
  if (searchStr.length > str.length) {
    return false;
  }

  for (let i = 0; i < searchStr.length; i++) {
    if (str[i] != searchStr[i] && i < str.length) {
      return false;
    }
  }
  return true;
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false