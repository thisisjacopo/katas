const nextId = (ids) => {
  for (i = 0; i <= ids.length; i++) {
    if (!ids.includes(i)) return i;
  }
};
