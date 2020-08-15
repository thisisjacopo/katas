const parseInt = (string) =>
  string.includes("million") ? 1000000 : oneMilly(string);

const oneMilly = (string) => {
  if (string.includes("thousand")) {
    let [left, right] = string.split("thousand");
    return oneThou(left) * 1000 + oneThou(right);
  }

  return oneThou(string);
};

const oneThou = (string) => {
  if (string.includes("hundred")) {
    let [left, right] = string.split("hundred");
    return oneHunna(left) * 100 + oneHunna(right);
  }
  return oneHunna(string);
};

const oneHunna = (string) => {
  let words = string
    .split(/[\s-]/) //regex101
    .filter((w) => w !== "")
    .filter((w) => w !== "and");
  return words.map((w) => toInteger[w]).reduce((x, acc) => acc + x, 0);
};

const toInteger = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};
