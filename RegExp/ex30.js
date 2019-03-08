// reuse patterns using capture groups.
// use capture groups () use to find repeated substring.
// use \ to specify where that repeat string appear and then number

let repeatNumb = '42 42 42';
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNumb);

console.log(result);