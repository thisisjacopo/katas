const invertHash = (hash) => {
  const swap = new Object();
  for (let key in hash) {
    //every hash key inside hash equals to key inside swap
    swap[hash[key]] = key;
  }
  return swap;
};
