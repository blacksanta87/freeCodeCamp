// remove whitespace from start and end
// \s is for space.
let hello = '              Hello World!          ';
let wsRegex = /^\s+|\s$/g;
let result = hello.replace(wsRegex, '');

console.log(result);