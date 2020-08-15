const solve = (arr) => {
  return arr
    .map((x) => [Math.max(...x), Math.min(...x)])
    .reduce(([numMax, NumMin], [digMax, digMin]) => {
      const ab = [
        numMax * digMax,
        numMax * digMin,
        NumMin * digMax,
        NumMin * digMin,
      ];
      return [Math.max(...ab), Math.min(...ab)];
    })[0];
};
