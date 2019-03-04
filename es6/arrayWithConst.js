// using const on object will prevent the reasignment of object identifier.
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // change to s = [2, 5, 7] will result in error!
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  console.log(s);
}

editInPlace(s);