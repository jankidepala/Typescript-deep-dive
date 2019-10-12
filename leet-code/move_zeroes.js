/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */
const moveZeroes = (nums) => {

    var p1 = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[p1] = nums[i]
            nums[i] = p1 === i ? nums[i] : 0
            p1++;
        }
    }
    console.log(nums)
};

console.log(moveZeroes([0, 0, 1]));