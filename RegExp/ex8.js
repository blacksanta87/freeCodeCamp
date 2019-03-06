// match single character with multiple possibilities
// [] ==> character class.
// use it to find  a group of character inside it.
let quoteSample = 'Beware of bugs in the above code; I have only proved it correct, not tried it.';
let vowelRegex = /[aeiou]/ig
let result = quoteSample.match(vowelRegex);

console.log(result);