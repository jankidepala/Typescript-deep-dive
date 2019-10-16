var matrix =
    [
        [00, 01, 02, 14],
        [10, 11, 12, 13],
        [20, 21, 22, 23],
        [30, 31, 32, 33]
    ]

var planets = [
    [1, 'K'],
    [2, 'N'],
];
var log = console.log.bind(console);


const rotate = function (matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = i; j < matrix[0].length; j++) {
            let cur = matrix[i][j];
            log('++', cur)
            //0 0 == 0 0
            //0 1 = 1 0
            matrix[i][j] = matrix[j][i];
            log(matrix[i][j])
            matrix[j][i] = cur;
        }
    }
    log(matrix)
    for (var i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

};

//const create2dArray = (rows, columns) => [...Array(rows).keys()].map(i => Array(columns))

log(rotate(planets))