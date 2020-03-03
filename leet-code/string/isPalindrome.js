var isPalindrome1 = function (s) {
    var strippedString = s.replace(/\W/g, '');
    console.log(strippedString)
    var reversedString = strippedString.split('').reverse().join('');
    console.log('--', reversedString)
    return strippedString.toLowerCase() == reversedString.toLowerCase();
};

var isPalindrome = function (st) {
    st = st.replace(/\W/g, '').toLowerCase();
    let s = st.length % 2, l = 0, r = 0;
    [l, r] = [Math.floor(st.length / 2) - 1, Math.ceil(st.length / 2)];
console.log('l r--', l, r)
    for (; l >= 0 && r < st.length; l-- , r++) {
        console.log(l, r, st[l], '==', st[r], st[l] == st[r])
        if (st[l] != st[r])
            return false;
    }
    return true;

};


console.log(isPalindrome("abbaj"))