// understand own properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

const canary = new Bird('Tweety');
const ownProps = [];

for(let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);