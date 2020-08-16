function spacey(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array.slice(0, i + 1));
  }
  return newArr.map((word) => word.join(``));
}
