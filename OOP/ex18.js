// Inherit behaviors from a supertype

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log('nom nom nom');
  }
};

const duck = Object.create(Animal.prototype);
const beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();