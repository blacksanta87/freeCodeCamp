// match all numbers.
// \d - [0-9]
let numString = 'Your sandwich will be $5.00';
let numRegex = /\d/g;
let result = numString.match(numRegex).length; // count how many digit that appears.

console.log(result); // return 3 (5, 0, 0).