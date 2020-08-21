const wordPattern = (word) => {
  word = word.toLowerCase();
  const map = {};
  const output = [];
  let counter = 0;

  for (const l of word) {
    if (!map[l] && map[l] !== 0) {
      map[l] = counter;
      counter++;
    }
    output.push(map[l]);
  }
  return output.join(".");
};
