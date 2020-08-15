const whoIsNext = (names, queue) => {
  var arrLeng = names.length;
  var j = 1;

  while (queue > arrLeng) {
    queue -= arrLeng;
    arrLeng *= 2;
  }

  while (queue > (arrLeng / names.length) * j) {
    j++;
  }

  return names[j - 1];
};
