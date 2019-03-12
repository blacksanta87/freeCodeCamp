// Understand the constructor property
function Bird(name) {
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

function joinBirdFraternity(candidate) {
  if(candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

const eagle = new Bird('Helm');
const terrier = new Dog('Jenny');

console.log(joinBirdFraternity(eagle));
console.log(joinBirdFraternity(terrier));