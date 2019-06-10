// 3. Rearrange positive and negative numbers in a 
// given array maintaining the order of occurrence – optimize with “constant extra space”

// For Input:  [12 11 -13 -5 6 -7 5 -3 -6]

// Output: [-13 -5 -7 -3 -6 12 11 6 5]

const num = [12 ,11 ,-13, -5, 6, -7, 5, -3, -6]
const reArrange = (n) => n.sort();
console.log(reArrange(num))