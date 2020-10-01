function substr(str, start, len) {
  if (start < 0) {
    start = str.length + start;
  }
  
  let substring = '';
  for (let i = start; i < start + len; i++) {
    if (i === str.length) {
      break;
    }

    substring += str[i];
  }

  return(substring);
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""