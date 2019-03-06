// find more than the first match.
// use the 'g' flag to find all the matches.
let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /twinkle/ig;
let result = twinkleStar.match(starRegex);

console.log(result);