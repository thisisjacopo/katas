const findMissingLetter = (array) => {
  for (let i = 1; i < array.length; i++) {
    const before = array[i - 1].charCodeAt();
    const current = array[i].charCodeAt();

    if (current - before !== 1) {
      return String.fromCharCode(before + 1);
    }
  }

  return null;
};
