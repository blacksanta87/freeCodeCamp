// JavaScript function definition
// use function definition and function expression to defined function.
/*
  function declaration.

  function functionName(parameter) {

  }

*/

function myFunction(a, b) {
  return a + b;
}

console.log(myFunction(2, 3));

/*
  Function expression

  const functionName = function (parameter) {

  }

*/

const x = function(a, b) { 
  return a + b; 
}

console.log(x(2, 4));

// Function Constructor (using new keyword)
const myFunction2 = new Function('a', 'b', 'return a + b');

console.log(myFunction2(3, 5));

// IIFE - Immediately Invoked Function Expression
(function greeting() {
  console.log('Hello');
})(); // Immediately invoked (don't need to call the function)

// function can be used as value

const addFiveandSix = myFunction(5, 6);
console.log(addFiveandSix);

// function can be used in expression.

const doubleMe = myFunction(2, 2) * 2;
console.log(doubleMe);

// function is object
// function have methods and property
function printArgsLength(a, b, c, d) {
  return arguments.length;
}

console.log(printArgsLength(22, 344, 44, 4));

console.log(printArgsLength.toString());

// Arrow function (ES6)
// not suited to define object methods ( no own this )
// not hoisted - must define first before calling
// use const - function expression value always constant.
const add = (a, b) => a + b;

console.log(add(3, 5));