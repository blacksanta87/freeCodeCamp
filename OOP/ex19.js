// Set the child's prototype to an instance of the parent.
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log('nom nom nom');
  }
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

const beagle = new Dog();
beagle.eat();