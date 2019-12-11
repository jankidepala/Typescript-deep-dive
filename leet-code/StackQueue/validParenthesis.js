/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];
    let last;
    for (const c of s) {
        console.log(c, ':::', map[c])
        if (map[c]) {
            console.log(map[c], stack.length)
            if (stack.length) {
                last = stack.pop();
                console.log('ggggg', last, map[c])
                if (last !== map[c]) {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
}


console.log(isValid("([a])") );