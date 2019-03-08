// convert celcius to fahrenheit
// algorithm: fahrenheit = celsius * 9/5 + 32
function convertToF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}

console.log( convertToF(30) );