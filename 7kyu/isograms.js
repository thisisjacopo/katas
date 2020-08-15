const isIsogram = (str) => {
  let stri = str.toLowerCase();

  for (i = 0; i < stri.length; i++) {
    if (stri.indexOf(stri[i]) !== stri.lastIndexOf(stri[i])) {
      return false;
    }
  }
  return true;
};
