const noSpace = (x) => {
  return x.split(" ").join("");
};

//ALSO WITH REGEX

const noSpaceTwo = (x) => x.replace(/ /g, ""); //fastest regex performance
