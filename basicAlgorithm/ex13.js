// Falsy Bouncer
// remove all falsy value from array
// falsy value: null, undefined, 0, '', NaN, false
function bouncer(arr) {
  const truthyArr = arr.filter(item => Boolean(item) === true);
  return(truthyArr);
}

console.log(bouncer([7, 'ate', '', false, 9]));