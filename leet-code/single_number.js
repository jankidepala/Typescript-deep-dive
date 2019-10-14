/**
 * 
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
 */

/**
* @param {number[]} nums
* @return {number}
*/
var log = console.log.bind(console);

var singleNumber = function (nums) {
    var t = nums.reduce((prev, curr) =>{ 
        console.log(prev ,curr, '++++', prev ^ curr);
debugger;
       return  prev ^ curr
    })
    return t;
};

// var singleNumber = function (nums) {
//         var t = nums.reduce(  (prev, curr, i, arr) => 
        
//         { 
//             log(prev, curr,i , arr);
//             return prev+curr
//         }, 5)

//         return t;
//     };

var n = [2, 7, 1, 2, 1, 2]
console.log('---', singleNumber(n))
