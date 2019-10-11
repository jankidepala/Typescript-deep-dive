/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var a = nums.filter((n, i, self) => {
        return self.indexOf(n) == i
    })
    if (a.length == nums.length) { return false } else { return true }
};


console.log(containsDuplicate([5, 6 , 7, 8, 9]))

 var arr = [5, 6, 7, 7, 1, 8]

// //SET
let t = [...new Set(arr)]
console.log(t);

//ES6
let removeDuplicates = arr.filter((val, index, array) => {
    //console.log( index, array.indexOf(val))
    return array.indexOf(val) == index
})

//console.log(t1);