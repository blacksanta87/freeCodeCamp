// change the prototype to a new object.
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function() {
    return 'nyum  nyum nyum';
  },
  describe: function() {
    return 'My name is ' + this.name;
  }
};

const terrier = new Dog('Sally');

console.log(terrier.name);
console.log(terrier.numLegs);
console.log(terrier.eat());
console.log(terrier.describe());

const ownProps = [];
const prototypeProps = [];

for(let property in terrier) {
  if(terrier.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);