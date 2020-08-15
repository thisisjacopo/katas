const cakes = (recipe, available) => {
  const arr = [];
  Object.entries(recipe).forEach(([key, value]) => {
    // if I have that ingredient
    if (available.hasOwnProperty([key])) {
      // get the amount of what I have
      const amountAvailable = available[key];
      // and divide it by the value of what I need
      arr.push(amountAvailable / value);
    } else {
      arr.push(0);
    }
  });
  console.log(arr);
  // return the smallest number rounded down to the nearest integer
  return Math.floor(Math.min(...arr));
};
