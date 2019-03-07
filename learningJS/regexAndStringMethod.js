// str.search(reg)
// find the position of first matches
// search only find the first match
let quoteSample = 'A drop of ink may make a million think';
let quoteRegex = /a/i; // find the first match position of 'a' - non sensitive case.
let quoteResult = quoteSample.search(quoteRegex); // at position 0.

console.log(quoteResult);

// str.match(reg)
// find for first match or matches - depending on flag. Use g to find all matches.
// will return array with additional properties, index and input.
// index will tell us where its position.
// input will tell us the string that we search (the whole string)
let motivationalStr = 'Fame is the thirst of youth';
let motivationalRegex = /fame/i;
let motivationalResult = motivationalStr.match(motivationalRegex); // return array

console.log(motivationalResult);
console.log(motivationalResult.index); // return the array position.
console.log(motivationalResult.input); // return the string input (motivationalStr)

// if pattern is deliminated by (), then the separete element will be return in the array.
let jsStr = 'JavaScript is a programming language';
let jsRegex = /java(script)/i;
let jsResult = jsStr.match(jsRegex);

console.log(jsResult);
console.log(jsResult[0]); // return the first element of the array. (the whole match)
console.log(jsResult[1]); // return the second element (the one inside the parenthesis).
console.log(jsResult.index); // return the index number where the str match.
console.log(jsResult.input); // return the jsStr string.

// str.match(reg) with g flag.
// return all matches in array. no additional properties. (no input or index properties).
let santaStr = 'HO-Ho-ho!';
let santaRegex = /ho/ig;
let santaResult = santaStr.match(santaRegex); // return array ['HO', 'Ho','ho'];

console.log(santaResult);

// () doesnt effect anything if use with g flag.
// using g flag on match will return the simple array without details.
let santaRegex2 = /h(o)/ig;
let santaResult2 = santaStr.match(santaRegex2);

console.log(santaResult2); // ['HO', 'Ho', 'ho'];

// if no match, the result will be 'null'
let heyStr = 'Hey-hey-hey!';
let notHeyRegex = /z/g;
let notHeyResult = heyStr.match(notHeyRegex);

console.log(notHeyResult); // return null.

// str.split(regex|substr, limit)
// split the string with regex as a delimiter.
let normalSplit = '12-01-2019'.split('-');
console.log(normalSplit); // return ['12', '01', '2019'];
let regexSplit = '12-01-2019'.split(/-/);
console.log(regexSplit); // return ['12', '01', '2019'];

// str.replace(str|reg, str|func)
// search and replace string.
let simpleReplace = '12-01-2019'.replace('-', ':'); // return '12:01-2019;
console.log(simpleReplace); // find only the first '-' and then replace it with ':'.

// the pitfall of above method, if the 1st argument is str, it only looks for the first match.
// use regex to replace all matches.
let regexReplace = '12-01-2019'.replace(/-/g, ':'); // return '12:01:2019';
console.log(regexReplace);

// the second argument is a replacement string.
// we can add special character in it.
// $$ - '$'
// $& - whole match
// $` - part of string before match.
// $' - part of string after match.
// $n - to complicated to understand.

// for instance, if we want to add Mr. infront of our string
let nameStr = 'John Doe, John Smith, John Bull';
let titlePrefix = nameStr.replace(/john/ig, 'Mr.$&'); // add Mr. infront of matches.
console.log(titlePrefix);

// John Smith to Smith, John
let name = 'John Smith';
let lastNameFirst = name.replace(/(John) (Smith)/, '$2, $1');
console.log(lastNameFirst);