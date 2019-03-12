// use inheritance so you don't repeat yourself
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    return 'nom nom nom'
  }
};

const feline = new Cat('Harry');
const grizzly = new Bear('Gerry');

console.log(feline.name);
console.log(grizzly.name);