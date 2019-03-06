// extract matches.
// use match() on string to extract the match regex.
let extractStr = 'Extract the word \'coding\' from this string.';
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(result);