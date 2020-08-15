const partsSums = (ls) => {
  let total = ls.reduce((total, n) => total + n, 0);
  newArray = [total];
  for (let i = 1; i <= ls.length; i++) {
    total -= ls[i - 1];
    newArray.push(total);
  }
  return newArray;
};
