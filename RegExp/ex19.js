// match everything but numbers and letters and underscore
// \W shorthand for [^a-zA-Z0-9_];
let quoteSample = 'The five boxing wizards jump quickly';
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result);