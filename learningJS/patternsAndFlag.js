// to search inside a string.
// return index number
let str = 'I love JavaScript!'; // will search here.
let regex = /love/; // find this pattern.
let result = str.search(regex);

console.log(result); // the pattern appear at index 2.

// using RegExp object
// useful to find pattern inside variable.
let searchStr = 'love';
let regexObj = new RegExp(searchStr);
let resultObj = str.search(searchStr);

console.log(resultObj); // return index 2

// use i flag to find case insensitive matches.
let secretWords = '49994kdsd 994949sksks SECRET 994kd';
let secretRegex = /secret/i; // use i flag.
let secretPosition = secretWords.search(secretRegex);

console.log(secretPosition);