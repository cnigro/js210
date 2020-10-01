function substring(string, start, end) {
  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || Number.isNaN(start)) {
    start = 0;
  }

  if (end < 0 || Number.isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  let newString = '';
  for (let index = start; index < end; index += 1) {
    newString += string[index];
  }

  console.log(newString);
  return newString;
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"