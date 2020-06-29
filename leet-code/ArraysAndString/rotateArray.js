// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
// Note:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

var rotate2 = function (nums, k) {
        return [[...nums.slice(k, nums.length)],
        [...nums.slice(0, k)]
        ]
}


var rotate1 = function (nums, k) {
        console.log(nums.length)
        console.log([...nums.splice(nums.length - k)], b)

        var b = nums.unshift(...nums.splice(nums.length - k));
};
// Time complexity: \mathcal{O}(n)O(n). nn elements are reversed a total of three times.
// Space complexity: \mathcal{O}(1)O(1). No extra space is used.

var rotate = function (nums, k) {
        console.log(nums.length)
        reverse(nums, 0, nums.length-1);
        console.log('a', nums)
        reverse(nums, 0,k-1);
        console.log('b', nums)

        reverse(nums, k, nums.length - 1);
        console.log('c', nums)

};


var reverse = function (nums, start, end) {
        console.log(nums, start, end)
        while (start < end) {
                let temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp;
                start++;
                end--;
              }
};

var nums = [1, 2, 3, 5]; var k = 2
console.log(rotate(nums, k))
console.log('NUMS', nums)
