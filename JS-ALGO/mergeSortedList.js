//Write a function that takes two sorted lists of numbers and merges them into a single sorted list.

var a = [2, 8, 9];
var b = [1, 5 , 7];

function mergeThese(a, b) 
{
    return a.concat(b).sort();
}
// sort - mege sort - O(n log n)
const mergyEs6 = (a, b) =>  a.concat(b).sort();
var t = mergeThese(a, b)
console.log(mergyEs6(a, b));