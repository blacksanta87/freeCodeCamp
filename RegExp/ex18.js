// match all letters and numbers with underscore
// the shortcut for [A-Za-z0-9_]+ is \w+
let quoteSample = 'The five boxing wizards jump quickly';
let alphabetRegexV2 = /[\w+]/g;
let result = quoteSample.match(alphabetRegexV2);

console.log(result);