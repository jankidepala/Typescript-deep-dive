
var m = [[1,2,3], [4,5,6], [7,8,9]];

const matrixRotation = (m) =>{
    // console.log('matri:: ',m);
   // console.log( Object.keys(m) );
    return Object.keys(m).map( c => {
        console.log('c', c)
        return m.map(r =>{
            console.log(r, r[c]);
            return r[c]
        })
    })
}

console.log("0".repeat(10))
console.log(Array.from(Array(10), (d, i) => i))
console.log('aaaaa');
console.log(matrixRotation(m).reverse());
console.log('bbbb');
