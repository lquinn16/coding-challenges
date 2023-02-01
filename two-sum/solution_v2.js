var twoSum = function(nums, target) {
    const indices = new Map();

    for (let idx = 0; idx < nums.length; idx++) {
        const complement = target - nums[idx];

        if (indices.has(complement)) {
            return [indices.get(complement), idx]
        }

        indices.set(nums[idx], idx)
    }
};
