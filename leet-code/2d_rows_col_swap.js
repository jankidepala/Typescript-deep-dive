var matrix =
    [
        [0, 1, 1, 14],
        [0, 2, 2, 13],
        [20, 5, 5, 23],
        [30, 5, 5, 33]
    ]

var log = console.log.bind(console);


// const swapRowsToColumn = function (matrix) {
//     for (var i = 0; i < matrix.length; i++) {
//         for (var j = i; j < matrix[0].length; j++) {
//             let cur = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             log('++', cur)
//             matrix[j][i] = cur
//         }
//     }
//     log(matrix)


// };
// const swapRowsToColumn = function (matrix) {
//     for (var i = 0; i < matrix.length; i++) {
//         for (var j = i; j < matrix[0].length; j++) {
//             let cur = matrix[i][j];
//             //log('start loop')
//             if (cur == matrix[i][j + 1]) {
//                 log('SAMW', matrix[i][j], matrix[i][j + 1]);
//                 if( cur == matrix[i+1][j]){
//                     log('one::', matrix[i+1][j+1], cur)
//                     if( cur == matrix[i+1][j+1]){
//                         log('two')
//                         //return [i, j]
//                     }
//                 }
//             } 
//             log('++', i, j, cur, matrix[i][j], matrix[j][i])
//             matrix[i][j] = j;
//             //matrix[i][j] = matrix[j][i];
//             // matrix[j][i] = cur
//         }
//     }
//     log(matrix)
// };

const swapRowsToColumn = function (matrix) {
    var rows = matrix.length,
        col = matrix[0].length;

    for (var i = 0; i < rows; i++) {
        for (var j = i; j < col; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp
        }
    }

    for (var i = 0; i < rows; i++) {
        for (var j = i; j < col/2; j++) {
             temp = matrix[i][j];
            matrix[i][j] = matrix[i][col - 1 - j];
            matrix[i][col - 1 - j] = temp;
        }
    }
    log(matrix)
};
log(swapRowsToColumn(matrix))