// JS Object Accessors.
// getters and setters allowed us to defined object accessors (computed property)

// JS Getter ( the get keyword )
// this example use lang propterty to get the value of the language property.

const person = {
  firstName: 'Lionel',
  lastName: 'Ritchie',
  age: 69,
  language: 'en',
  get lang() {
    return this.language;
  }
};

console.log(person.lang);

const person2 = {
  firstName: 'Ahmad Abbas',
  lastName: 'Zainol',
  age: 32,
  language: '',
  set lang(lang) {
    this.language = lang;
  }
};

person2.lang = 'ms';

console.log(person2.language);

// when using getters, u don't need to put () at the end of the property.
// JS can secure better data quality when using getter and setter

// Why using getter and setter
// 1- gives simpler syntax
// 2- allow equal syntax for properties and methods (no need to add () on methods.)
// 3- secure better data quality
// 4- useful for doing things behind the scene.

const obj = {
  counter: 0,
  get reset() {
    this.counter = 0;
  },
  get increment() {
    this.counter++;
  },
  get decrement() {
    this.counter--;
  },
  set add(value) {
    this.counter += value;
  },
  set substract(value) {
    this.counter -= value;
  }
};

obj.reset;
console.log(obj.counter);

obj.add = 5;
console.log(obj.counter);

obj.substract = 1;
console.log(obj.counter);

obj.increment;
console.log(obj.counter);

obj.decrement;
console.log(obj.counter);

obj.reset;
console.log(obj.counter);

// Object.defineProperty() can also be used to add getter and setter
const obj2 = { counter: 0 };

Object.defineProperty(obj2, 'reset', {
  get : function() {this.counter = 0;}
});
Object.defineProperty(obj2, 'increment', {
  get : function() {this.counter++;}
});
Object.defineProperty(obj2, 'decrement', {
  get : function() {this.counter--;}
});
Object.defineProperty(obj2, 'add', {
  set : function(value) {this.counter += value;}
});
Object.defineProperty(obj2, 'substract', {
  set : function(value) {this.counter -= value;}
});

obj2.reset;
console.log(obj2.counter);

obj2.add = 5;
console.log(obj2.counter);

obj2.substract = 1;
console.log(obj2.counter);

obj2.increment;
console.log(obj2.counter);

obj2.decrement;
console.log(obj2.counter);

obj2.reset;
console.log(obj2.counter);