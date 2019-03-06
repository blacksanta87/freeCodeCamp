// match anything with wildcard period
// use '.' to match
// if u want to find hug, hunter, hula, /hu./;
let exampleStr = 'Let\'s have fun with regular expressions!';
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

console.log(result);