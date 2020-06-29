
/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortedSquares(A) {
    A = A.map(x => x * x);
    console.log(A)
    let i = A.length - 1;
    let l = 0;
    let r = A.length - 1;
    const res = Array(A.length);
    console.log(res)
    let pivot = Math.floor(res/2);
    recurse()
    // while (l <= r) {
    //     console.log(l, r, A[l] , A[r])
    //     //console.log('res',res)
    //     res[i--] = A[l] > A[r] ? A[l++] : A[r--];
    // }
    return res;
};

console.log( sortedSquares([9,-2, -5, 8, 3]))