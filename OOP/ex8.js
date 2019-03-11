// Verify an object's constructor with instanceof
function House(numBedrooms) {
  this.numBedRooms = numBedrooms;
}

const myHouse = new House(3);

console.log(myHouse instanceof House);