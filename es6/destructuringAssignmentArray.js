let a = 8, b = 6;
(() => {
  'use strict';
  [b, a] = [a, b];
})()
console.log(a, b);