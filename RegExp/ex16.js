// match beginning string pattern
// use '^' outside the character set []
let rickyAndCal = 'Cal and Ricky both like racing.';
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

console.log(result);