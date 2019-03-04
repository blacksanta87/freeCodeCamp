function freezeObj(){
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  }
  // use Object.freeze(obj) to prevent obj mutability.
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj(); // will return error!