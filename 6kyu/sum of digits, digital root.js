const digital_root = (n) => {
  var single = n.toString().split("").map(Number);
  var sum = 0;
  for (var i = 0; i < single.length; i++) {
    sum += single[i];
  }
  var backToNum = sum.toString();
  if (backToNum.length > 1) {
    var newSum = backToNum.split("").map(Number);
    var firstSumDigit = newSum.slice(0);
    var lastSumDigit = newSum.slice(-1);
    return firstSumDigit[0] + lastSumDigit[0];
  } else {
    return sum;
  }
};
