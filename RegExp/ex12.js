// match characters that occur one or more times.
// use '+' to check the character appear at least once and may repeated.
// must be repeat after one another.
// /a+/g on abc - ['a'], on aabc - ['aa'], on abab - ['a', 'a,'];
let difficultSpelling = 'Mississippi';
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

console.log(result);