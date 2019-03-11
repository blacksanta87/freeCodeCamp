// Slice and Splice
// given two array and index
// use slice and splice to copy each element from 1st array into 2nd array in order.
// begin inserting elements at index n of the second array
// return the resulting array. The input array should remain the same
function frankenSplice(arr1, arr2, n) {
  let copyArr1 = arr1.slice();
  let copyArr2 = arr2.slice();

  for(let i = 0; i < copyArr1.length; i++) {
    copyArr2.splice(n + i, 0, copyArr1[i]);
  }
  return copyArr2;
}

console.log(frankenSplice([1,2,3], [4,5,6], 1));
console.log(frankenSplice([1, 2], ['a', 'b'], 1));