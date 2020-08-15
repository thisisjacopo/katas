const findOdd = (n) => {
  let counter = 0;
  for (i = 0; i < n.length; i++) {
    for (x = 0; x < n.length; x++) {
      if (n[i] === n[x]) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      return n[i];
    }
  }
};
