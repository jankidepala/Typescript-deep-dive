/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (st) {
    let m = new Map();
    for (const s of st) {
        !m.get(s) ?
            m.set(s, 1)
            :
            m.set(s, m.get(s) + 1)
    }
    for (i = 0; i < st.length; i++) {
        if (m.has(st[i]) && m.get(st[i]) === 1)
            return i;
    }

    return -1

}

console.log(firstUniqChar('lketkl'));