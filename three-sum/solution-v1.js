// Brute force
var threeSum = function(nums) {
    let triplets = [];
    for(let i=0; i<nums.length; i++) {
        for(let j=nums.length; j>0; j--) {
            for (let k=i+1; k<nums.length; k++) {
                 if (i != j && i != k && j != k && nums[i] + nums[j] + 
nums[k] == 0) {
                    let triplet = [nums[i], nums[j], nums[k]].sort();
                     var contains = triplets.some(elem => {
                        return JSON.stringify(triplet) === 
JSON.stringify(elem);
                    });
                    if (!contains) triplets.push(triplet)
                }
            }
        }
    }
    return triplets;  
};
