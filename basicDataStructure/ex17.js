// check if an object has a property
// use hasOwnProperty(prop)
// use prop in object
const users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  if('Alan' in obj && 'Jeff' in obj && 'Sarah' in obj && 'Ryan' in obj) {
    return true;
  } else {
    return false;
  }
}

console.log(isEveryoneHere(users));