const evenChars = (string) => {
  let even = [];
  let invalid = "invalid string";

  if (string.length < 2 || string.length > 100) {
    return invalid;
  }

  for (var i = 0; i < string.length; i++) {
    i % 2 === 0 ? null : even.push(string[i]);
  }
  return even;
};
