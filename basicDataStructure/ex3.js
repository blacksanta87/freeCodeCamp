// Add items to an array with push() and unshift()
function mixedNumber(arr) {
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three');
  return arr;
}

console.log( mixedNumber(['IV', 5, 'six']) );