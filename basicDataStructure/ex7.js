// copy array items using slice()
// slice() takes only 2 params
// param 1 : index to start
// param 2 : index to end (item not included the index number)
function forecast(arr) {
  arr = arr.slice(2, 4);
  return arr;
}

console.log( forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']) );