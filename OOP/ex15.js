// understand where an object's prototype comes from
function Dog(name) {
  this.name = name;
}

const beagle = new Dog('Snoopy');

console.log(Dog.prototype.isPrototypeOf(beagle));