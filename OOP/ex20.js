// Reset an inherited constructor property.
function Animal() {}
function Bird() {}
function Dog() {}

Animal.prototype = {
  constructor: Animal
};

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const duck = new Bird();
console.log(duck.constructor);

const beagle = new Dog();
console.log(beagle.constructor);