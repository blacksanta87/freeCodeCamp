function makeClass() {
  'use strict';
  class Thermostat {
    constructor(temperature) {
      this._temperature = temperature;
    }
    // get temp in celcius
    get temperature() {
      return ( this._temperature - 32 ) * 5 / 9;
    }
    //
    set temperature(updateTemperature) {
      this._temperature = updateTemperature * 9.0 / 5 + 32;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);