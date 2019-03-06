// match character that occur zero or more times.
// use '*' to find characters that occur zero or more times.
// /go*/g on 'goooooooool' return ['gooooooooo']
// /go*/g on 'guts' return ['g'];
let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';
let chewieRegex = /Aa*/g;
let result = chewieQuote.match(chewieRegex);

console.log(result);