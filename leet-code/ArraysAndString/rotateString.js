var rotateString1 = function (A, B) {
    console.log((B + B))
    console.log( (B + B).indexOf(A)) 
	return (B + B).indexOf(A) != -1 && A.length == B.length
};

var rotateString = function(a, b) {
    for (let i = 0; i <= a.length; i += 1) {
        const test = `${a.slice(i)}${a.slice(0, i)}`;
        if (test === b) return true;
    }
    return false;
};

console.log(rotateString('helllo', 'lohell'))