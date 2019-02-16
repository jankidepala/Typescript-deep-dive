//  123
//   4
//  567


mat1 = [[1, 2, 5, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]]


function hourglassSum(mat) {
    var ar = []
    var r = mat[0].length;
    var c = mat.length;

    for (i = 0; i < r - 2; i++) {
        for (j = 0; j < c - 2; j++) {
            var sum = 0;
            sum = mat[i][j] + mat[i][j + 1] + mat[i][j + 2] +
                mat[i + 2][j] + mat[i + 2][j + 1] + mat[i + 2][j + 2] +
                mat[i + 1][j + 1];
            ar.push(sum)
        }

    }
    return Math.max(...ar)


}
p = [ 10, 8, 7, 6, 5, 9 ]



function maxDifference(a) {
    var numar = []
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length - 1; j++) {
            if ((a[i]) < a[j]) {
                numar.push(a[j] - a[i])
            }
        }
        if (numar.length > 0) {
            return Math.max(...numar)

        } else {
            return -1
        }
        var t 
        numar.length > 0 ?  t = Math.max(...numar) : -1
        console.log(t)
    }
}

maxDifference(p)
console.log(maxDifference(p))
