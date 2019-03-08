// use the delete keyword to remove object properties
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods['oranges'];
delete foods['plums'];
delete foods['strawberries'];

console.log(foods);