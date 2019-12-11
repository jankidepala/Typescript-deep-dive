var findTargetSumWays = function(nums, S) {
    var results = 0;
    var targetSum = function(i, sum) {
        if(i === nums.length) {
            if(sum === S) results++;
            return;
        }
        targetSum(i + 1, sum + nums[i]);
        targetSum(i + 1, sum - nums[i]);
    }
    targetSum(0, 0);
    return results;
};


console.log( findTargetSumWays( [1, 1, 1, 1, 1] , 3) );