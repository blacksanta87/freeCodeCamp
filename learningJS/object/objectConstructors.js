// JS Object Constructor
// good practice to name constructor functions with an uppercase first letter.
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Object types (Blueprints) (Classes)
// sometimes we need a 'blueprint' to create many objects of the same 'type'
// to create 'object type' we use object constructor functions
// function Person() is the object constructor function.
// Objects of the same type are created by calling the constructor function with the new keyword
const myFather = new Person('Zainol', 'Hashim', 64, 'brown');
const myMother = new Person('Khatimah', 'Maarof', 61, 'brown');

console.log(myFather);
console.log(myMother);

console.log(myFather.firstName);
console.log(myMother.lastName);

// this keyword in object is refered to the owner the function, the object itself.
// this in constructor function doesnt have value. it is a substitute for the new object.
// the this value will become the new object when new object created.

// adding new property to an object.
myFather.language = 'ms';
console.log(myFather.language);

// the property will just added to myFather, not myMother or any other Person objects.

// adding new methods to an object
myFather.name = function() {
  return this.firstName + ' ' + this.lastName;
};

console.log(myFather.name());

// Adding property to a constructor.
// we cannot add new property like we add on object.
// we need to add it to constructor function

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = 'Malaysian';
}

// this will make object properties have default values.

// adding methods to a constructor
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = 'Malaysian';
  this.name = function() {
    return this.firstName + ' ' + this.lastName;
  };
  this.changeName = function(name) {
    this.lastName = name;
  };
}

myMother.changeName('Haji Maarof');
console.log(myMother.name());

// Built in JS Constructor
const x1 = new Object(); // A new Object object
const x2 = new String(); // a new String object
const x3 = new Number(); // a new Number object
const x4 = new Boolean(); // a new Boolean object
const x5 = new Array(); // a new Array object
const x6 = new RegExp(); // a new RegExp object
const x7 = new Function(); // a new Function object
const x8 = new Date(); // a new Date object.

// The Math() object is not in the list.
// The Math() object is a global object
// The new keyword cannot be used on Math.

