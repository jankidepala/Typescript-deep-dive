
var a = [1, 2, 3, 3,4,6,7,8,9]
const removeDiplicates1 = (a) => {
    return [...new Set(a)];
}

const removeDiplicates2 = (a) => {
    for (let i = a.length - 1; i--; i < 0) {
        console.log(i, a[i], a[i - 1])

        if (a[i] === a[i - 1])
            a.splice(i)
        //else {  return a}
    }
}

var removeDuplicates = function (nums) {
    var i = 0;
    for (const elem of nums) {
        console.log('nn', elem, nums[i])
        if (elem !== nums[i]) {
            nums[i++] = elem;
            console.log('changed  ', nums)
        }
    };
    console.log(nums)
    return nums.length && i + 1;
};
console.log('RRRR', removeDuplicates(a))