const getSum = (a, b) => {
  let res = 0;
  if (b < a) [a, b] = [b, a];
  while (a <= b) res += a++;
  return res;
};
