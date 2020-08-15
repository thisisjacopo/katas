const solve = (arr) => {
  let dir = [];
  let a = [];
  for (let i of arr) a.push(i.split(" "));
  dir.push("Begin " + a.slice(-1).pop().slice(1).join(" "));
  for (let i = a.length - 1; i > 0; i--)
    a[i][0] === "Right"
      ? dir.push("Left " + a[i - 1].slice(1).join(" "))
      : dir.push("Right " + a[i - 1].slice(1).join(" "));
  return dir;
};
