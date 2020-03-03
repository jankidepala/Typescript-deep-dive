const isAnagram1 = (s, t) => {
    if (s.length != t.length) return false;
    let g = new Map();
    for (l in s) {
        if (g.has(l))
            g.set(l, g.get(l) + 1)
        else { g.set(l, 1) }
    }
console.log(g)
    for (l in t) {
       
    }



}

function isAnagram(s, t) {
    const map = {};
    s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
    t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
    console.log(map)
    return Object.keys(map).every(k => map[k] === 0);
}


console.log(isAnagram1('abcdd', 'caaee'))

// const s2 = '\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69' //é

// console.log( "[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]")
// console.log(s2.normalize())
// console.log( '👩‍❤️‍👩'.length
// )

// for (const c of s2){
//     console.log( '--',c)
// }