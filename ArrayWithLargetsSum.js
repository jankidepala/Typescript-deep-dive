var a = [5, 2, 7, 3, 4]
//space - 

//Sum 

function sum(a) {
    var t = a.sort((x, y) => y - x)
        .reduce((e) => a[0] + a[1]);
    return t
}

console.log(sum(a));

//sort - divide and conquer , merge sort - O( n lon n) linerithmic
//reduce - O(n)


var st = "1-AAS SAA-1"
console.log(st.split('').reverse().join('') == st);


var arr = {
    "movie": "", 
    "actor":"fox"
}
var t= 5
console.log(typeof t.toString());console.log( typeof t)
//built-in int-to-string functions of the language.  
//Or write the function to move through a linked list.  