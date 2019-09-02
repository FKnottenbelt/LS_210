function logInBox(string) {
  const len = string.length;
  console.log('+-' + '-'.repeat(len) + '-+');
  console.log('| ' + ' '.repeat(len) + ' |');
  console.log('| ' + string + ' |');
  console.log('| ' + ' '.repeat(len) + ' |');
  console.log('+-' + '-'.repeat(len) + '-+');
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
