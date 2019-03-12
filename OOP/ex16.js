// understand the prototype chain
function Dog(name) {
  this.name = name;
}

const beagle = new Dog('Snoopy');

console.log(Object.prototype.isPrototypeOf(Dog.prototype));