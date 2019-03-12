// remember to set the constructor property when changing the prototype.
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    return 'nyum nyum nyum';
  },
  describe: function() {
    return 'My name is ' + this.name;
  }
};

const stray = new Dog('Johnny');

console.log(stray.name);
console.log(stray.constructor);
console.log(stray.eat());
console.log(stray.describe());

const ownProps = [];
const prototypeProps = [];

for(let property in stray) {
  if(stray.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);