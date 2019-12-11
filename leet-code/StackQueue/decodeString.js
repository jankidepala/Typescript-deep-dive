/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var code;
    var startIndex;
    var result = [""];
    var count = [];
    
    for (var i = 0; i < s.length; i++) {
        console.log('CHARA:',s[i])
        if (s[i] === "[") {
            result.push("");
        } else if (s[i] === "]") {
            console.log(result, result.length)

            result[result.length - 2] += result.pop().repeat(count.pop());
        } else if (s[i].charCodeAt() < 58) {
            startIndex = i;
            while (s[i + 1].charCodeAt() < 58) {
                i++;
            }

            count.push(+s.substring(startIndex, i + 1));
        } else {
            startIndex = i;
            while ((code = s.charCodeAt(i + 1)) > 96 && code < 123) {
                i++;
            }
            result[result.length - 1] += s.substring(startIndex, i + 1);
            console.log(result)
        }
    }
    
    return result.pop();
};

a = "3[a]2[bc]"
// if number - count
// if [  - result add ''
//if ]
// else 
console.log(decodeString(a))