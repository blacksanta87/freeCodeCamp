// iterate through the keys of an object with a for...in statement
// use for(const prop in objects) to iterate through object
const users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let result = 0;
  for (let user in obj) {
    if(obj[user]['online']) {
      result++;
    }
  }
  return result;
}

console.log(countOnline(users));

