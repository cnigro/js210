function isXor(left, right) {
  return !!(left && !right) || (right && !left);
}

isXor(false, true);
isXor(true, false);
isXor(false, false);
isXor(true, true);

isXor(false, 3);
isXor('a', undefined);
isXor(null, '');
isXor('2', 23);