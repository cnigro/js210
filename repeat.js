function repeat(str, times) {
  if (!Number(times) || times < 0) {
    return undefined;
  }

  let repeated = ''
  for (let i = 0; i < times; i++) {
    repeated += str;
  }

  return repeated;
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined