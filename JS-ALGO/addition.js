function sumShouldBEZero(a) {
    a.reduce((prev, next) => {
        console.log(a, prev, next)
        return next 
    })
}

sumShouldBEZero( [ -3, 0, 3, 7])


function countUniqueVal(s) {
    //1stWAY ::
    let m = [...new Set(s)]
    console.log(m.length)
    // SECOND WAY:::
    //    return s.filter( (val, index, arr) => {
    //       return  arr.indexOf(val) == index
    //    })
}
console.log(countUniqueVal([-2, -2, -5, -5, 6, 8, 9, 2, 8, 9, 1]));

