var st = 'abcab'

const isUniqueHashing = (st) => {
    var hash = {};

    for (s in st) {
        let c = st[s];
        console.log(c)
        if (hash[c]) {
            return false
        } else {
            hash[c] = true
        }
    }
    return hash
}

const isUnique = (st) => {
var arr = Array(10).fill(false);

console.log(arr);
    for (s of st) {
        let index = st.charCodeAt(st[s])
        console.log(st[s], s, '==', index, arr[s])
        if (st[s] == true) {
            return true
        } else{
            index
        }
           // return true;
        
    }
}
console.log(isUnique(st));
