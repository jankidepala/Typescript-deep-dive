const arr = [ 1,9, 9 ];

const helper = (_a) => {
    console.log(_a.length)
    _a[_a.length - 1] = _a[_a.length - 1] + 1;
    return _a
}

const plusOne1 = (arr) => {
    if (arr[arr.length - 1] === 9) {
        let temp;
        console.log( arr.length )
        if ( arr.length  > 1){
         temp = helper(arr.splice(0, arr.length - 1));
        temp.push(0)
        } else{
            temp = [1, 0]
        }
        return temp
    } else {
        return helper(arr)
    }
}

const plusOne = (digits) => {
    for (var i = digits.length - 1; i >= 0; i--) {

//console.log('+++',digits[i], ++digits[i])

        if (++digits[i] > 9) 
        {digits[i] = 0;
        }
        else return digits;
    }
    digits.unshift(1);
    return digits;

}

console.log('--', plusOne(arr));