// Find the longest word in a string
function findLongestWordLength(str) {
  const strArr = str.split(' ');
  strArr.sort( (a, b) => b.length - a.length );
  return strArr[0].length;
}

console.log( findLongestWordLength('The quick brown fox jumped over the lazy dog') );