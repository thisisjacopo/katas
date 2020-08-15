function nextBigger(n) {
  let nextBigNum = -1;
  let nums = n.toString().split("");
  for (let i = nums.length - 1; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) {
      let rightPartNums = nums.splice(i + 1).sort();
      for (let j = 0; j < rightPartNums.length; ++j) {
        if (rightPartNums[j] > nums[i]) {
          nums[i] = rightPartNums[j] - nums[i];
          rightPartNums[j] = rightPartNums[j] - nums[i];
          nums[i] = rightPartNums[j] + nums[i];
          nextBigNum = parseInt(nums.concat(rightPartNums).join(""), 10);
          i = 0;
          break;
        }
      }
    }
  }

  return nextBigNum;
}
