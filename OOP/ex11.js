// iterate over all properties.
// own property - directly defined on the object instance
// prototype property - defined on prototype
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 2;

const beagle = new Dog('Snoopy');

const ownProps = [];
const prototypeProps = [];

for(let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);