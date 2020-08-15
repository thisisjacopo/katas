const nbYear = (p0, percent, aug, p) => {
  let arr = [];
  let rate = percent / 100;
  for (p0; p0 < p; p0 += p0 * rate + aug) {
    currValue = p0 + p0 * rate + aug;
    arr.push(currValue);
  }
  return arr.length;
};
