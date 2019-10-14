/**
 *
 *   Remove Duplicates from Sorted Array
Solution
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
* @param {number[]} nums
* @return {number}
*/

var log = console.log.bind(console);
// sorted
// const removeDuplicates = (nums) => {
//     return [...new Set(nums)]
//  }
var removeDuplicates = function (nums) {
    let i = 0;
    let len = nums.length;

    for (let j = 1; j < len; j++) {
        log(nums[j], nums[j - 1], i, j)
        if (nums[j] === nums[j - 1]) {
            i++;
        } else {
            nums[j - i] = nums[j];
        }
    }
    return len - i;
};

log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))