var ar = [1, 3, 4, 5]
const product1 = (ar) => {
    let tmp = [...ar], result = []
    for (let i = 1; i < ar.length + 1; i++) {
        console.log(ar.slice(0, i - 1).concat(ar.slice(i, ar.length)))
        result.push(ar.slice(0, i - 1).concat(ar.slice(i, ar.length))
            .reduce((a, b) => a * b))
    }

    console.log(result);
}
var productExceptSelf2 = function(nums) {
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i=nums.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    for (var j=0; j < nums.length; j++) {
        console.log(j)
        output[j] *= leftMult;
        leftMult *= nums[j];
        console.log('oo',output, i)

    }

    return output;
};

var productExceptSelf = function(nums) {
    let output = []
    
    nums.reduceRight((prev, acc, i) => {
        output[i] = prev
        return prev * acc
    }, 1)
    
    nums.reduce((prev, acc, i) => {
        output[i] *= prev
        return prev * acc
    }, 1)
    
    return output
};
const product = (ar) => {


}
console.log(productExceptSelf(ar));