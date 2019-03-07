// match all non-number
// \D = [^0-9]
let numString = 'Your sandwich will be $5.00';
let noNumRegex = /\D/g;
let result = numString.match(noNumRegex).length; // return 24

console.log(result); // excluding 5, 0 ,0