
var a = [1, 1,2]
const removeDiplicates1 = (a) => {
    return [...new Set(a)];
}

const removeDiplicates = (a) => {
    for( let i = a.length-1; i--; i<0 ){
        console.log(i, a[i], a[i-1])

        if(a[i] === a[i-1])
        a.splice(i)
        //else {  return a}
    }
}
console.log(removeDiplicates(a))