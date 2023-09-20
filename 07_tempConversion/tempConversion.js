const convertToCelsius = function(fahrenheit) {
  if (Number.parseFloat((fahrenheit - 32) * (5/9)).toFixed(1) == 0.0)
  {
    return 0;
  }
  return parseFloat(Number.parseFloat((fahrenheit - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  return Number.parseFloat((celsius * (9/5)) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
