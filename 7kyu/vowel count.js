const getCount = (str) => {
  let vowelsCount = 0;
  let string = str.toString();

  for (i = 0; i <= string.length; i++) {
    string.charAt(i) == "a" ||
    string.charAt(i) == "e" ||
    string.charAt(i) == "i" ||
    string.charAt(i) == "o" ||
    string.charAt(i) == "u"
      ? (vowelsCount += 1)
      : null;
  }
  return vowelsCount;
};
