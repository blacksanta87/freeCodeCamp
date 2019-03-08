// check for the presence of an element with indexOf()
// use indexOf(item) to find the index number.
// if no such item is exist, it return -1
function quickCheck(arr, elem) {
  if(arr.indexOf(elem) === -1) {
    return false;
  } else {
    return true;
  }
}

console.log( quickCheck(['squash', 'onions', 'shallots'], 'mushrooms') );