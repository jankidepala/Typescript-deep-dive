//slice() - returns extracted part of string -  a.slice(1)
//substring() - only positive vals
//validAnagrams

//Filter - select certain items of an array where condition is true
//map -converts each item of an array, returns a value

function validAnagrams(a, b) {
    //Length check
    if (a.length != b.length) {
        return false
    }
    let y = false
    //FIRST METHOD basic JS way
    // for (var ch of a) {
    //     y = b.includes(ch) ? true : null
    // }

    //SECOND METHOD SPLIT METHOD
    let t1 = a.split('').sort().join('')
    let t2 = b.split('').sort().join('')
    let p1 = (t1 !== t2) ? true : false
    return p1
}
const m = validAnagrams("abede", "abcdw")
console.log(m) // OUTPUT - true or false



//PALINDROME 
const palindrome = palimdrome('abcdgr', 'gdcba')
console.log('palindrome', palindrome)
function palimdrome(a, b) {
    return a.split('').reverse().join('') == b
}