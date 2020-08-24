const solution = (list) => {
  let len = list.length;
  let out = [];

  for (i = 0; i < len; i = j + 1) {
    out.push(list[i]);

    for (let j = i + 1; j < len && list[j] == list[j - 1] + 1; j++);
    j--;

    if (i == j) {
      // single number
      out.push(",");
    } else if (i + 1 == j) {
      // two numbers
      out.push(",", list[j], ",");
    } else {
      // range
      out.push("-", list[j], ",");
    }
  }
  out.pop(); // need to remove trailing comma
  return out.join("");
};
