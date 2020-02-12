//A Termination Condition
//A Base Case
//The Recursion


function factorial(x) {
    if (x < 0) return;
    if (x === 0) return 1;
    //console.log(x, '-->', factorial(x-1))
    return x * factorial(x - 1)
}
//console.log(factorial(4))
function revString(str) {
    if( str === '') return '';
    return revString(str.substr(1)+  str[0])
    //return revString(str+ 'a')
}

console.log(revString('Janki'))