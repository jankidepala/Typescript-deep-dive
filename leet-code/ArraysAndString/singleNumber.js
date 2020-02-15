var singleNumber = function (nums) {
    return nums.reduce((prev, curr) => {
        console.log(  prev ,'^', curr, prev ^ curr)
       return prev ^ curr;
    });
};

console.log( singleNumber( [7,2,3, 3, 2, 1, 7]) )


// time O(n)
// // space O(1)
// function singleNumber(nums) {
//     let num = 0;
//     for (let n of nums) {
//         console.log('-----', n, num ^ n)
//      num ^= n;
//      console.log('++',num)

//     }
//     console.log(num)
//     return num;
//   }