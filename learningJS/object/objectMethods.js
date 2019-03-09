// JS Object Methods.
// JS methods are action that can be performed on object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40,
  eyeColor: 'blue',
  fullName() {
    return this.firstName + ' ' + this.lastName; // this is object method.
  }
};

// the this keyword refer to the owner of the function.
// in this case, person is the owner of the function.

// Accessing Object methods
// objectName.methodName();
console.log(person.fullName());
console.log(person.fullName); // return the function definition

// Use built in methods.
// using .toUpperCase() on String Object to convert all letters to uppercase letter.
const message = 'Hello World!';
const upperCaseMessage = message.toUpperCase();

console.log(message);
console.log(upperCaseMessage);

// adding method to object.
person.greeting = function() {
  return 'Hello, how are you? My name is ' + this.fullName() + '. Nice to meet you!';
};

console.log(person.greeting());