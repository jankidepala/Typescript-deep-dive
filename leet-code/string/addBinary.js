/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    console.log( parseInt(a));
    return (parseInt(a).toString(2) +  parseInt(b).toString(2))
};



var addBinary11 = function(a, b) {
    var result = "";
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;
    while (i >= 0 || j >= 0 || carry > 0) {
        carry += i >= 0 ? parseInt(a[i--]) : 0;
        carry += j >= 0 ? parseInt(b[j--]) : 0;
        console.log( 'carry', carry, carry % 2 )
        result = carry % 2 + result;
        carry = parseInt(carry / 2);
    }
    return result;
};

const addBinary2= (a, b) => {
    let maxLength = Math.max(a.length, b.length);
    let dot = 0, r = "";
    for (let i = 0; i < maxLength; i++) {
        const sum = dot + (a[a.length - i - 1] | 0) + (b[b.length - i - 1] | 0);  //  undefined | 0  ->  0
        r = sum % 2 + r;
        dot = sum >> 1;
    }
    return dot ? "1" + r : r;
  }

  console.log( addBinary11("11","1") );
