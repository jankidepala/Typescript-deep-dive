var a = 7
function outer(p) {
    const b = 100;
   // var a= 5
    function inner() {
           a = p
          console.log(a+b);
     }
   return inner
 }

var X = outer(8); 
var Y = outer(9); 
//end of outer() function executions
X() // X() invoked the first time
Y()