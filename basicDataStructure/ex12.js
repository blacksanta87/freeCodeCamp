// create complex multi-dimensional arrays.
let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  [
    'iterate', 
    1.3849, 7, 
    '8.4876', 
    'arbitrary', 
    'depth',
    [
      'deep', 
      [
        'deeper',
        [
          'deepest'
        ]
      ]
    ]
    ]
  // change code above this line
];

console.log(myNestedArray[4][6][1][1]);