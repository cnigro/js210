function splitStr(str, delim) {
  if (delim === undefined) {
    console.log('ERROR: no delimiter provided');
  }

  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === delim) {
      console.log(temp);
      temp = '';
    } else if (delim === '') { 
      console.log(str[i]);
    } else {
      temp += str[i];
    }
  }
  
  console.log(temp);
}

splitStr('abc,123,hello world', ',');
splitStr('hello');
splitStr('hello', '');
splitStr('hello', ';');
splitStr(';hello;', ';');