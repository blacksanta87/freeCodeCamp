// match numbers and letters of the alphabet.
// use /[a-z0-9]/ig to match it.
let quoteSample = 'Blueberry 3.141592653s are delicious.';
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);

console.log(result);