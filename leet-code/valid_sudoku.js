/**
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 */

var sudoku = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

/**
* @param {character[][]} board
* @return {boolean}
*/

var log = console.log.bind(console);

var isValidSudoku = function(board) {
    'use strict';
    var i,
        j,
        m,
        n,
        num,
        sets = [],
        vsets = [],
        csets = [[],[],[]],
        numArray = ['1','2','3','4','5','6','7','8','9'];
    
    for(i = 0; i < 9; i++){
        sets[i] = new Set(); // init set
        for(j = 0; j < 9; j++){
            m = parseInt(i/3);
            n = parseInt(j/3);
            num = board[i][j];
            if(num === '.') {
                continue;
            }else if(numArray.indexOf(num) !== -1){ // valid number
                vsets[j] = vsets[j] || new Set(); // init vset
                csets[m][n] = csets[m][n] || new Set(); // init cset
                if(sets[i].has(num) || vsets[j].has(num) || csets[m][n].has(num)){
                    return false;
                }else{
                    sets[i].add(board[i][j]);
                    vsets[j].add(board[i][j]);
                    csets[m][n].add(board[i][j]);
                }
            }
        }
    }
    
    return true;
};

log(isValidSudoku(sudoku));