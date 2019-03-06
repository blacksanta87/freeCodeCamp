// match single characters not specified
// use '^' as a negated character set
// /[^aeiou]/ig will match all character that are not a vowels.
let quoteSample = '3 blind mice';
let myRegex = /[^aeiou0-9]/ig;
let result = quoteSample.match(myRegex);

console.log(result);