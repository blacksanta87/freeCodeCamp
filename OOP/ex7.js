// Extend constructor to received arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const terrier = new Dog('Spot', 'brown');
console.log(terrier.name);
console.log(terrier.color);
console.log(terrier.numLegs);