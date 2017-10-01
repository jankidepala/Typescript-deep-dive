function add(a, b) {
    //sum
    var i;
    var sum = 0;
    var nums = [1, 3];
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("FunctionTypes:: sum of the numbers", sum);
    //array
    var someArray = [9, 2, 5];
    for (var _a = 0, someArray_1 = someArray; _a < someArray_1.length; _a++) {
        var item = someArray_1[_a];
        console.log(item);
    }
    for (var _i = 0; _i < someArray.length; _i++) {
        var item = someArray[_i];
        console.log('FunctionTypes:: array' + item);
    }
    //Default Arguments
    function args(r1, r2) {
        if (r2)
            return r1 * r2;
        return r1;
    }
    console.log("FunctionTypes:: defalt args ", args(3));
    console.log("FunctionTypes:: Optional args ", args(3, 5));
    return a + b;
}
console.log(add(2, 4));
