const wave = (str) => {
  let finalArray = [];

  for (let i = 0; i < str.length; i++) {
    let arr = str.split("");
    if (arr[i] === " ") {
      continue;
    }

    arr[i] = arr[i].toUpperCase();
    finalArray.push(arr.join(""));
  }
  return finalArray;
};
