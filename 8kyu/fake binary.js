const fakeBin = (x) => {
  let nString = x.toString().split("");
  let loop = [];

  for (i = 0; i < nString.length; i++) {
    nString[i] < 5 ? loop.push(0) : loop.push(1);
  }

  let newS = loop.join("");

  return newS;
};
