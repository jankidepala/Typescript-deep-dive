var s = 'abcdf'

function reverseString(s) {
    helper(0, s)

}


function helper(index, str) {
    if (index <= str.length) {

        helper(index + 1, str)
        console.log( index, str[index] )


    }
}
console.log(reverseString(s))