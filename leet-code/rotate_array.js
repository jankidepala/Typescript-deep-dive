/**
 * 
 * Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 */
// [7,1,2,3,4,5,6]
/**
 * 
 * SLICE - returns removed array
 * splice - returns the selected element(s) in an array, as a new array object.
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify nums in-place instead.
*/
var log = console.log.bind(console);

var rotate = function (nums, k) {
        return ([...nums.slice(k, nums.length), ...nums.slice(0, k)])
        //return ([...nums.splice(k, nums.length), ...nums.splice(0, k)])
};

log(rotate( [1,2,3,4,5,6,7], 3))