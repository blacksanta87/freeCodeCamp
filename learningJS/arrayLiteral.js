const a1 = [1, 2, 3, 4];                    // array containing number
const a2 = [1, 'two', 3, null];             // array containing mixed type
const a3 = [                                // array on multiple lines.
  'What the hammer? What the chain?',
  'In what furnace was thy brain?',
  'What the anvil? What dread grasp',
  'Dare its deadly terrors clasp?'
];
const a4 = [                                // array containing objects
  { name: 'Ruby', hardness: 9 },
  { name: 'Diamond', hardness: 10 },
  { name: 'Topaz', hardness: 8 }
];
const a5 = [                                // array containing another array (nested array)
  [1, 3, 5],
  [2, 4, 6]
];

// array.length return the length of the array.
const arr = ['a', 'b', 'c'];
arr.length; // return 3

// use bracket notation to access individual array element.
arr[0]; // return 'a'
arr[arr.length - 1] // return the last element - 'c'

// overwrite the value of array element with bracket notation and assignment operator
arr[2] = 'hello' // return ['a', 'b', 'hello'];