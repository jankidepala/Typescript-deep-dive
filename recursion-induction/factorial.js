// //Reacursive funtion has 2 main parts
// 1. A terminating condition (base case)
// 2. Recursive case

var rec = (t) => {
    if (t === 1) {
        return 1
    }
    return t * rec(t - 1)
}
function factorial(x) {
    if (x < 0) return;
    if (x === 0) return 1;
    //console.log(x, '-->', factorial(x-1))
    return x * factorial(x - 1)
}


function revString(str) {
    if( str === 'a'){ return '' }
    else {
    //return revString(str.substr(1)+  str[0])
    //return str+revString(str+ 'a')
 }
}

var final = rec(5)

var st = revString('JANKI')
console.log(st)