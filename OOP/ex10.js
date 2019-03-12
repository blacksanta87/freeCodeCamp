// Use prototype properties to reduce duplicate code.
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 2;

const beagle = new Dog('Snoopy');

console.log(beagle.numLegs);