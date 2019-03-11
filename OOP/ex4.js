// Make code more reusable with the this keyword
const dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function() {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

console.log(dog.sayLegs());