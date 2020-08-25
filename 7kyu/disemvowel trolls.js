const disemvowel = (str) => {
  let newString = "";

  for (i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) continue;
    newString += str[i];
  }

  return newString;
};
