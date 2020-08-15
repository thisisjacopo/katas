const maskify = (cc) => {
  let firstNumbs = cc.slice(0, cc.length - 4);
  let printHash = [];
  let lastFour = cc.slice(-4);

  if (cc.length <= 4) {
    return lastFour;
  }

  for (i = 0; i < firstNumbs.length; i++) {
    printHash.push("#");
  }

  let allTogether = printHash.join("");

  return allTogether + lastFour;
};
