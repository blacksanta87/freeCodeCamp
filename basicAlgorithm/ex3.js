// factorialize a number.
function factorialize(num) {
  if (num <= 0) {
    return 1;
  } else {
    const numArr = [];
    for(let i = 1; i <= num; i++) {
      numArr.push(i);
    }
    return numArr.reduce( (acc, curr) => acc * curr);
  }
}

console.log(factorialize(5));