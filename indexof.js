function indexOf(firstStr, subStr) {
  let firstIdx = -1;
  let subIdx = 0; 

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === subStr[subIdx] && subIdx < subStr.length) {
      subIdx += 1;
    } else if (firstStr[i] !== subStr[subIdx]) {
      subIdx = 0;
    }

    if (subIdx === subStr.length) {
      firstIdx = i - (subIdx - 1);
      break;
    }
  }
  console.log(firstIdx);
}

function lastIndexOf(firstStr, subStr) {
  let lastIdx = -1;
  let subIdx = subStr.length;

  for (let i = firstStr.length; i > 0; i--) {
    if (firstStr[i] === subStr[subIdx] && subIdx > 0) {
      subIdx -= 1
    } else if (firstStr[i] !== subStr[subIdx]) {
      subIdx = subStr.length;
    }

    if (subIdx === 0) {
      lastIdx = i - 1;
      break;
    }
  }
  console.log(lastIdx);
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1