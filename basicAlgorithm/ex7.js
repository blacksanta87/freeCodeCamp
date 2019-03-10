// Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  let result = '';
  let counter = 0;

  if (num < 0) {
    return '';
  } else {
    while(counter < num) {
      result += str;
      counter++;
    }
  }
  return result;
}

console.log(repeatStringNumTimes('abc', 3));