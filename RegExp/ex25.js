// specify upper and lower number of matches.
// use {} quantity specifier
let ohStr = 'Ohhhh no';
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohRegex);

console.log(result);