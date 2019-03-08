// use capture group to search and replace.
let huhText = 'This sandwich is good';
let fixRegex = /(\w+)$/;
let result = huhText.replace(fixRegex, 'okey-dokey');

console.log(result);