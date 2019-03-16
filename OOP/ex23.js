// Use a mixin to add common behavior between unrelated object
const bird = {
  name: 'Donald',
  numLegs: 2
}

const boat = {
  name: 'Warrior',
  type: 'race-boat'
}

const glideMixin = function(obj) {
  obj.glide = function() { return true; };
};

glideMixin(bird);
glideMixin(boat);

console.log(bird.glide());
console.log(boat.glide());