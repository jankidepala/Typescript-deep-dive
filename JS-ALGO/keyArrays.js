function kryArray(a1, a2) {
    let a = {}
    for (let val of a1) {

        a[val] = (a[val] || 0) + 1
        console.log(val)
    }
    for (let key in a1) {
        console.log(key)
    }
    //ES6
    var obj = {}
    for (const [i, v] of a1.entries()) {
        obj[i] = v
    }
    //FOR EACH
    let t = {}
    a1.forEach((element, index) => {
        t[index] = element
    });
    return t
}
//OUTPUT ----{1: 1, 2:2, 3:1}
console.log(sameArray(a1, a2))


