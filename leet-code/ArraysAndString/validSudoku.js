var isValidSudoku1 = function (board) {
    const s = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == '.') continue;
            let row = "row" + i + board[i][j];
            let col = "col" + j + board[i][j];
            let box = "box" + Math.floor(i / 3) + "-" + Math.floor(j / 3) + board[i][j];
            // console.log(row)
            //console.log(col)
            if (s.has(row)) return false;
            if (s.has(col)) return false;
            if (s.has(box)) return false;
            console.log(s)
            s.add(row);
            s.add(col);
            s.add(box);
        }
    }
    return true;
};
var isValidSudoku = function (board) {
    console.log(board)

    for (a in board) {
        console.log(a)
    }
}
var t = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
var p = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(isValidSudoku(t))