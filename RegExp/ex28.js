// check for all or none
// use '?' to check zero or one of the preceeding element.
// '?' is like saying that the preceeding element is just optional
let favWord = 'Favorite';
let favRegex = /Favou?rite/;
let result = favRegex.test(favWord);

console.log(result);