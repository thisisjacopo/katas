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

// solution with map.has()

const wordPatternHas = (word, d = new Map()) => {
  return [...word.toLowerCase()]
    .map((c) => {
      if (!d.has(c)) d.set(c, d.size);
      return d.get(c);
    })
    .join(".");
};
