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


//console.log(containsDuplicate([5, 6, 7, 8, 8, 9]))

var arr = [5, 6, 7, 7, 1, 8]
// let removeDuplicatesWithSet  = [...new Set(arr)]

// //Get duplicate  element value
// let getDuplicates = arr.filter((val, index, array) => {
//     return array.indexOf(val) != index
// })

// let removeDuplicates = arr.map((v, i) => {
//     console.log( v, i, arr.includes(v))
//    return  arr.indexOf(v)
// })

function abc(item) {
    //ForEach
var result = [];
item.forEach(function(a) {
    console.log(item ,item.indexOf(a))
    
    //  if(result.indexOf(item) < 0) {
    //      result.push(item);
    //  }
});
return result;

    // return arr.map((a, i, c) => {
    //     console.log(a, i, c)
    //     if( c[i] == a){
    //         return a
    //     }
    // })
}
var arr1 = [7, 7, 8]

console.log(abc(arr1));