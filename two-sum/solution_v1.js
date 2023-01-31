function isSum(n, n_index, nums, target) {
    for (let i=0; i<nums.length; i++) {
        if (i != n_index && n + nums[i] == target) return i;
    }
    return -1;
}

var twoSum = function(nums, target) {
    let result = [];

    for (let i=0; i<nums.length; i++) {
        let idx = isSum(nums[i], i, nums, target);
        if (idx >= 0) {
            result.push(i); result.push(idx); break;
        }
    }
    return result;
};
