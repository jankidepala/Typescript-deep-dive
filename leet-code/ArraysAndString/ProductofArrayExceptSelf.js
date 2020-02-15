var ar = [1, 3,4,5]
const product = (ar) => {
    let tmp = [...ar], result =[]
    for( let i=0; i<ar.length; i++){
       
        console.log('---', tmp)
       // delete tmp[i]
       result.push( tmp.reduce( (a, b) => a *b) );
        console.log( tmp)
    }

    console.log(result);
}

console.log( product(ar))