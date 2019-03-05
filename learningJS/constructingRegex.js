const re1 = /going/; // regex that can search for the word 'going'
const re2 = new RegExp('going'); // equivalent object constructor

const input = 'As I was going to Saint Ives';
const re = /\w{3,}/ig;

// starting with the string (input)
console.log( input.match(re) ); // ['was', 'going', 'Saint', 'Ives'];
console.log( input.search(re) ); // 5 (the first three letter word starts at index 5);


// starting with the regex (re)
console.log( re.test(input) ); // true (input contains at least one three letter word);
console.log( re.exec(input) );

// note that any of these methods can be used directly with a regex literal
console.log( input.match(/\w{3,}/ig) );
console.log( input.search(/\w{3,}/ig) );
console.log( /\w{3,}/ig.test(input) );
console.log( /\w{3,}/ig.exec(input) );