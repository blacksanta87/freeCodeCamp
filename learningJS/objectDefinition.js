// primitive value - don't have properties and method.
// primitive data type - data that have primitive value.
// string, number, null, undefined and boolean are primitive data type.
// primitive data type is immutable - cannot change.
// 'Hello' will always be 'Hello'
const person = 'John Doe'; // define an object literal, person.
console.log(person);

// objects are variable too. object can contain many value.
// the value are written as name:value / properties:value
const person2 = { 
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};

console.log(person2);
// object is a collection of named value!!

// object methods are action that can be peformed on objects.
// object properties can be primitive value, other object and functions.
// object method is an object property that containing function definition.
const person3 = {
  firstName: 'Mikhael',
  lastName: 'Aryan',
  age: 8,
  eyeColor: 'brown',
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person3.fullName());

// Object literal - the easiest way to create object.
const person4 = {
  firstName: 'Rusiah',
  lastName: 'Lahap',
  age: 34,
  eyeColor: 'black'
};

console.log(person4.firstName);
console.log(person4.lastName);
console.log(person4.age);
console.log(person4.eyeColor);

// using JavaScript keyword new.
// better use object literal than this one.
const person5 = new Object();
person5.firstName = 'Ahmad Abbas';
person5.lastName = 'Zainol';
person5.age = 32;
person5.eyeColor = 'brown';

console.log(person5.firstName);
console.log(person5.lastName);
console.log(person5.age);
console.log(person5.eyeColor);

// Object are mutable - copy by reference, not by value
// if conts x = person, x is person object. not a copy of person.
// if you change person properties value, the x properties values are also change.
const person6 = {
  firstName: 'Alberto',
  lastName: 'Fujimori',
  age: 81,
  eyeColor: 'black'
};

const person7 = person6;
console.log(person7);
person7.eyeColor = 'brown';
console.log(person6.eyeColor);
// JavaScript variables are not mutable, only JavaScript Object!