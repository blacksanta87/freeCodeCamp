const input = 'As I was going to Saint Ives';
console.log(input.startsWith('As')); // true;
console.log(input.endsWith('Ives')); // true;
console.log(input.startsWith('going', 9)) // start with index 9 - true;
console.log(input.endsWith('going', 14)) // index 14 is the end string - true;
console.log(input.includes('going')); // true;
console.log(input.includes('going', 10)) // starting at index 10 - false;
console.log(input.indexOf('going')); // index 9;
console.log(input.indexOf('going', 10)) // at index 10 - no 'going' -1;
console.log(input.indexOf('nope')); // no 'nope' -1;