// specify exact number of matches
// between quantity specifier, place the number we want.
// eg. if we want exactly 3 'a' on the string 'haaah', /ha{3}h/
let timStr = 'Timmmmber';
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);

console.log(result);