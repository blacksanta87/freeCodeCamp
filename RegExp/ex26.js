// specify only the lower number of matches
// use quantity specifier {} with the lower number and comma only.
// eg. if we want to match 'hah' with at least 3 'a's /ha{3,}h/;
let haStr = 'Hazzzzah';
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);

console.log(result);