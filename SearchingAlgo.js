//Linear Search - Search by going one by one through element
//indexOf() includes()  find  findIndex

console.log(linearSearch([3], 3));
function linearSearch(arr1, n) {
    let c  = arr1.findIndex(k => k==n )
    console.log("LL",c)

    return c 
}
