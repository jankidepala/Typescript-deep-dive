/**
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
 */
var cm = function (a, b) {
    return a - b;
}
const IntersectedArrays = (nums1, nums2) => {
    let res = [];
    var p1 = 0;
    var p2 = 0;
    //nums1 and nums2
    // 1, 4,5 // 4, 5, 6,7
    // i and j loop
    // while

    //nums1.sort(cm);
    //nums2.sort(cm);
    var log = console.log.bind(console);

    while (p1 < nums1.length && p2 < nums2.length) {
       // console.log(p1, nums1.length, p2, nums2.length)

         console.log(p1, nums1[p1], nums2[p2])

        if (nums1[p1] == nums2[p2]) {
            res.push(nums1[p1])
            p1++;
            p2++;
            console.log('A')
        } else if (nums1[p1] > nums2[p2]) {
            console.log('B')
            p2++;
        } else {
            console.log('C')
            p1++
        }
    }



    return res

}

console.log(IntersectedArrays([1, 2, 6, 5, 2, 1], [1,2, 7, 5, 2]));