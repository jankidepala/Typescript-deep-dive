/**
 * 
 * You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.
Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var log = console.log.bind(console);

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [4, 5, 6],
    [4, 5, 6]


]
// const rotate = function (matrix) {
//     for (var i = 0; i < matrix.length; i++) {
//         for (var j = i; j < matrix[0].length; j++) {
//             let cur = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = cur;
//             log(matrix)
//         }
//     }
//     for (var i = 0; i < matrix.length; i++) {
//        // log('---',matrix[i])
//         log(matrix[i].reverse() )

//         matrix[i].reverse();
//     }

// };

//log(rotate(matrix));
const rotate = function (matrix) {
var net =[]

for(var i=0;i<matrix.length;i++){
    log('I::',i)
    for(var j=i;j<2;j++){
        log('j',j)
        net.push([j])

    }
}
log(net)
}
log(rotate(matrix));