/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary1 = function(a, b) {
    console.log(a, parseInt(a).toString(2))
   return parseInt(a).toString(2) +  parseInt(b).toString(2)
};


console.log('--',a);

var addBinary = function(a, b) {
    var result = "";
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;
    while (i >= 0 || j >= 0 || carry > 0) {
        carry += i >= 0 ? parseInt(a[i--]) : 0;
        carry += j >= 0 ? parseInt(b[j--]) : 0;
        
        result = carry % 2 + result;
        carry = parseInt(carry / 2);
    }
    return result;
};

var a = addBinary("15", "1")
