
function maxChar(string) {
    var output = [];
    var map = {};

    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (!map[char]) {
            map[char] = 1
        } else {
            map[char] = map[char] + 1;
        }
    }

    //console.log(map);
}

//console.log(maxChar("heolloworld"));



function repetetveNumberString(str) {
    let t = str.match(/(.)\1+/g)
        .reduce((val, newVal) => { return val.length > newVal.length ? val : newVal })
    return t.length

}
str = 'trigggeeeeer'
//console.log(repetetveNumberString(str));


repe = "Your PINN is 1234"
function charCount(repe) {
    let c = repe.split('').map((val, index) => { let a = { val: val }; return a })
}
charCount(repe)

function char(str) {
    var obj = {}
    for (var ch of str) {
        console.log(obj[ch])
        obj[ch] = ++obj[ch] || 1
    }
    return obj
}
console.log(char(str)) //Output { t: 1, r: 2, i: 1, g: 3, e: 5 }
  //console.log( /[0-1]+$/.test(str))

function isSequence( a, b) {
    console.log(Array.from(a))
}
isSequence( 'Hello', 'Hello world')