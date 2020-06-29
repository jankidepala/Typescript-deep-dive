/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
//65 to 90, and the lowercase ranges from 97 to 122.
// let m = new Map();
// for (var i = 0; i < 26; i++) {
//     m.set(String.fromCharCode(i + 65), String.fromCharCode(i + 65))
// }
// for (var i = 0; i < 26; i++) {
//     m.set(String.fromCharCode(i + 97), String.fromCharCode(i + 97))
// }

// //console.log(m)
var numJewelsInStones = function (J, S) {
    let total=0
    var hash={}
    for(const a of J){
        if(hash[a]){
            hash[a]++
        } else{
            hash[a] = 1
        }
    }
    console.log(hash)

    for(const a of S){
        if(hash[a]){
            total++;
        } 
    }

    return total;
};


console.log(numJewelsInStones('aBC', 'aAABACCCC'))