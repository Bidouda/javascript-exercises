const convertToCelsius = function(temperature) {
  //(x - 32) * 5/9 F° to C°
  conversionResult = ((temperature - 32) * 5/9);
  if(Number.isInteger(conversionResult)){
    return Number(conversionResult);
  }else{
    return Number(conversionResult.toFixed(1));
  }
};

const convertToFahrenheit = function(temperature) {
  //(x * 9/5 + 32) C° to F°
  conversionResult = temperature * 9/5 + 32;
  if(Number.isInteger(conversionResult)){
    return Number(conversionResult);
  }else{
    return Number(conversionResult.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
