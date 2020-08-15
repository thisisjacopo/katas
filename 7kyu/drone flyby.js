const flyBy = (lamps, drone) => {
  let lampArr = lamps.split("");
  for (let i = 0; i < drone.length; i++) {
    if (lampArr[i] === "x") {
      lampArr.splice(i, 1, "o");
    }
  }
  return lampArr.join("");
};
