weatherInfo = (temp) => {
  let c = convertToCelsius(temp);
  if (c < 0) return c + " is freezing temperature";
  else return c + " is above freezing temperature";
};

convertToCelsius = (temperature) => (temperature - 32) * (5 / 9);
