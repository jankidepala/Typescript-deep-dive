/*Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Input: [1,2,3]
Output: [1,2,4]
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    //single digit
    // console.log( digits[digits.length-1])
    //         var latNum = digits[digits.length-1]
    // if (latNum< 9) {
    //     digits.pop();
    //     digits.push( latNum+1)

    // } else {
    //     digits.pop();
    //     digits.push(1, 0)

    // }
    // return digits;

    for (var i = digits.length - 1; i >= 0; i--) {
        console.log('AA', digits[i])

        if (++digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    // console.log('AAJJJ');
    console.log('d', digits)
     digits.unshift(1);
    return digits;
}

console.log(plusOne([9,9,9]))

