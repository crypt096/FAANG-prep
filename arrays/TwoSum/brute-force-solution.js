const twoSum = (nums, target) => {
  for(let p1 = 0; p1 < nums.length; p1++) {
    for(let p2 = p1 + 1; p2 < nums.length; p2++) {
      if(nums[p1] + nums[p2] === target) {
        return [p1, p2];
      }
    }
  }

  return null;
};

