/* 
The reduce() method is used to apply a function to each element 
in the array to reduce the array to a single value.

*/

let arr = [1, 7, 9, 3];
let doit = (arr) => {
    var allProfit = []
    arr.forEach((l, i) => {
        console.log(l, arr[i + 1], i)

        if (l < arr[i + 1]) {
            allProfit.push(arr[i + 1] - l);
        }
    })

    console.log('allProfit', allProfit.reduce((a, b) => a + b))
    if (allProfit.length > 0) {
        return allProfit.reduce((a, b) => a + b);
    } else {
        return 0;
    }
}

let sum = arr.reduce((init, currentVal, index, ary) => {

}, 0);


var timeSell = arr.reduce((initVal, currentVal, index, ary) => {

}, 0)
//   let sum = arr.reduce((initVal, currentPrice, index, ary) => {
//    // console.log( initVal, currentPrice , index, ary)

//     const nextPrice = ary[ index + 1];
//     console.log(nextPrice)
//     return initVal ;
//   });


console.log(doit(arr));


const twoSum = (nums, target) => {
    const a = {};

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        console.log('---', a)
        if (difference in a) {
            return [a[difference], i];
        }
        console.log(a)

        a[nums[i]] = i;
    }

    //return null;
};


console.log(twoSum([1,3, 5,7,8], 12));