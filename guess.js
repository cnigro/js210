function guess() {
  const PASSWORD = 'javascript'
  let tries = 0;
  let rlSync = require('readline-sync');
  while (tries < 3) {
    let guess = rlSync.question("Please enter your password: ");
    if (guess === PASSWORD) {
      console.log('You have successfully logged in.');
      return;
    }
    tries += 1;
  }
  console.log('You have been denied access.');
}

guess();