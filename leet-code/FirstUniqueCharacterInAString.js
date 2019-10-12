/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var m;
    var word = s.split(''``);
    Loop1:
    for (i = 0; i < word.length; i++) {       
        Loop2:
        for (j = 0; j < word.length; j++) {
            console.log(word[i], word[j] )
            if( i !=j && word[i] == word[j]){
                console.log('Have word')
                m = i+1;
                break Loop1;
            }else{
                m = -1;
            }
        }
       
    }
    return m;
};

var t = firstUniqChar('loveleetcode');
console.log(t)