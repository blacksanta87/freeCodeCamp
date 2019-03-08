// remove items using splice()
// use splice() to remove any consecutive elements.
// splice() takes 2 parameters
// param 1 : index to begin removing elements.
// param 2 : number of elements to delete.
function sumOfTen(arr) {
  arr.splice(2, 2);
  return arr.reduce( (a, b) => a + b );
}

console.log( sumOfTen([2, 5, 1, 5, 2, 1]) );