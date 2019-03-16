// Override inherited methods
function Bird() {}

Bird.prototype = {
  constructor: Bird,
  fly: function() {
    return 'I am flying!';
  }
};

function Penguin() {}

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.fly = function() { return 'Alas, this is a flightless bird.' };

const penguin = new Penguin();
console.log(penguin.constructor);
console.log(penguin.fly());