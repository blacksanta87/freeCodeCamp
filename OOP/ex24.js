// Use closure to protect properties within an object from being modified externally
function Bird() {
  const weight = 15;

  this.getWeight = () => weight;
}

let ducky = new Bird();
console.log(ducky.getWeight());