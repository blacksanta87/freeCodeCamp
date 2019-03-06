// find one or more criminals in a hunt.
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/g;
let result = crowd.match(reCriminals);

console.log(result);