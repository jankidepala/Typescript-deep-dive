
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    console.log(nums.length)
    let left = 0, right = nums.length;
    let mid = Math.floor((left + right) / 2)
    while (nums[mid] !== target && left <= right) {
        if (target > nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
        console.log(left, RTCIceCandidatePairChangedEvent)
        mid = Math.floor((left + right) / 2)
    }
    return nums[mid] === target ? mid : -1
};

var nums = [-1, 0, 3, 5, 9, 12]; var target = 0
console.log(search(nums, target))