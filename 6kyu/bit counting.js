const countBits = (n) => {
  let bag = n.toString(2).split("");
  let result = bag.reduce((sum, num) => sum + Number(num), 0);

  return result;
};
