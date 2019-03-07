// match non whitespace characters
// \S - [^ \r\t\f\n\v];
let sample = 'Whitespace is important in separating words';
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace).length;

console.log(result);