// positive and negative lookahead.
// check multiple patterns over the same string.
// positive, (?=...) the pattern are there, but won't actually match it.
// the ... is the required pattern that is not matched.
// negative (?!...) the pattern is not there. (that we don't want to be there.)
let sampleWord = 'astronaut';
let sampleRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result = sampleRegex.test(sampleWord);

console.log(result);