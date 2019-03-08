// convert celcius to fahrenheit
// algorithm: fahrenheit = celcius * 9/5 + 32
function convertToF(celcius) {
  let fahrenheit = celcius * 9 / 5 + 32;
  return fahrenheit;
}

console.log( convertToF(30) );