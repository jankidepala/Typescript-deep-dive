// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

nums1 = [1, 2, 3, 0, 5, 0], m = 4
nums2 = [2, 5, 6, 8, 9], n = 3
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var x = 0,
        y = 0;
    
    nums1.splice(m, nums1.length);
    nums2.splice(n, nums2.length);
    console.log(nums1)
    console.log(nums2)

    while(y < n){
        if(nums2[y] < nums1[x] || nums1[x] === undefined){
            nums1.splice(x, 0, nums2[y]);
            x++;
            y++;    
        } else {
            x++;
        }
    }
};

merge(nums1, m, nums2, n)