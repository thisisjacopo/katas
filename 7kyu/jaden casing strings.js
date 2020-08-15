String.prototype.toJadenCase = () => {
  let tweet = [];
  let words = this.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    word = words[i];
    tweet.push(word[0].toUpperCase() + word.slice(1));
  }
  return tweet.join(" ");
};
