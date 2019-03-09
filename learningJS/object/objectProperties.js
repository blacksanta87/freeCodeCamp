// JS properties are values associated with object
// JS object is a collection of unordered properties.
// properties can change, add and deleted but some are read-only.
// 3 ways to accessing object properties.
// 1- object.property - dot notation
// 2- object['property'] - bracket notation with properties name in string.
// 3- object[expression] - expression must evaluate to property name.

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40,
  eyeColor: 'blue',
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.firstName + ' is ' + person.age + ' years old.');
console.log(person['firstName'] + ' is ' + person['age'] + ' years old.');

let personName = 'firstName';
let personAge = 'age';

console.log(person[personName] + ' is ' + person[personAge] + ' years old.');

// JS for...in loop
// loops through the properties of an object.
// the block code inside for...in loop will be executed once per each propery.
for(let prop in person) {
  console.log('Property: ' + prop);
  console.log('Value: ' + person[prop]);
}

// adding property
person.nationality = 'English';
console.log(person.nationality);

// deleting property
// delete both propery and value
// delete only usable on object
// delete can't be used on predefined JS object properties. it will crashed the program.
delete person.nationality;
console.log(person.nationality); // person['nationality'];

// property attribute
// like value, prop also have enurable, configurable and writable attribute.
// these attributes define how property can be accessed. (writable? readable?)
// in JS all attribute can be read, but only value attribute can be change.

// Prototype properties.
// JS object inherit the properties of their prototype.
// delete keyword does not delete inherited property.