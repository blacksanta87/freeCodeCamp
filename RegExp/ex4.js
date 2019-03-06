// Ignore case while matching
// use the 'i' flag
let myString = 'freeCodeCamp';
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

console.log(result);