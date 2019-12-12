var s = ["h", "e", "l", "l", "o"]

function reverseString11(s) {
    helper(0, s)
}

var reverseString = function (s) {
    for (let i = 0, temp; i < s.length / 2; i++) {
        temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
    return s;
};

var m = []
function helper(index, str) {
    if (index < str.length) {
        helper(index + 1, str)
    }
}
console.log(reverseString11(s))