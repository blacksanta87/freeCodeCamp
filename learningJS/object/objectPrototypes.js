// JS Object Prototype
// all JS objects inherit properties and methods from a prototype
// all object inherits from Object.prototype

// using prototype property.
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = 'Malaysian';
Person.prototype.name = function() {
  return this.firstName + ' ' + this.lastName;
};

const mikhael = new Person('Ahmad Mikhael', 'Abbas', 8, 'brown');

console.log(mikhael.nationality); // return Malaysian.
console.log(mikhael.name());