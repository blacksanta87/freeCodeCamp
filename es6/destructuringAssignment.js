const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTemperatureTmrw(avgTemperatures) {
  'use strict';
  const { tomorrow : tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}

console.log(getTemperatureTmrw(AVG_TEMPERATURES));