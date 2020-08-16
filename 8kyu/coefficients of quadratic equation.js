const quadratic = (x1, x2) => {
  return [1, -(x1 + x2), x1 * x2];
};

//AKA

const quadraticTwo = (x1, x2) => {
  return [1, (x1 + x2) * -1, x1 * x2];
};
