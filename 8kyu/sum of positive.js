const positiveSum = (arr) => {
  const sum = arr.reduce((n, a) => {
    return a > 0 ? n + a : n;
  }, 0);
  return sum;
};
