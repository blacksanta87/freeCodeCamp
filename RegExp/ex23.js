// match whitespace.
// \s - match whitespace
// also match carriage return, tab, form feed, and newline character.
// similar to [\r\t\f\n\v];
let sample = 'Whitespace is important in separating words';
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace).length;

console.log(result);