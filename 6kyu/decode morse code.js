decodeMorse = function (morseCode) {
  let string = "";
  let singleWord = morseCode.split("  ");
  for (i in singleWord) {
    let arr = singleWord[i].split(" ");
    for (j in arr) {
      if (MORSE_CODE[arr[j]] !== undefined) {
        string += MORSE_CODE[arr[j]];
      }
    }
    string += " ";
  }
  string = string.trim();
  return string;
};
