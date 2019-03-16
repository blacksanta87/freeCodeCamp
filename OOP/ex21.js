// add methods after inheritence

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log('nom nom nom');
  }
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log('woof!');
};

const beagle = new Dog();
console.log(beagle.constructor);
beagle.eat();
beagle.bark();