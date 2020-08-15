const scramble = (str1, str2) => {
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");

  // to deal with performance issues
  if (str2Arr.length > 200) return false;
  str1Arr.forEach((letter) => {
    // if letter exists in str2
    if (str2Arr.indexOf(letter) > -1) {
      // I remove that letter from str2Arr
      str2Arr.splice(str2Arr.indexOf(letter), 1);
    }
  });
  // if str2Arr is empty, str2 is contained in str1 (true)
  return str2Arr.length === 0;
};
