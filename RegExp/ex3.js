// match a literal strings with different possibilities.
// if u want to match yes or no, /yes|no/
let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

console.log(result);