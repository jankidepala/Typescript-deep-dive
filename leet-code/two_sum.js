/**
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

const twoSum = (nums, target) => {
    const a = {};

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (difference in a) {
            return [a[difference], i];
        }
        a[nums[i]] = i;
        console.log(a)
    }

   // return null;
};

console.log(twoSum([3, 1, 5, 7, 5, 6, 1], 7))

// /[7, 8, 9]
// n 
// 7+8 = n
//8+9 =n
//{ num:i, num:i, num,:i}
// loop  - return
// diff = d
// loop through array to see  if d exists 

// // if ( d in arr){
//     return []
// }
