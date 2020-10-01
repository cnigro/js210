// Write a function logMultiples that takes one argument nnumber. 
// It should log all multiples of the argument between 0 and 100
// (inclusive) that are also odd numbers. Log the values in
// descending order. Assume that number is an integer between 0 and 100. 

function logMultiples(num) {
  for(let i = Math.floor(100/num) * num; i >= 0; i -= num) {
    if(i % num === 0 && i % 2 === 1) {
      console.log(String(i));
    }
  }
}



logMultiples(17);
logMultiples(21);