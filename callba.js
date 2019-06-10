"use script"


//function passed into another function
var list =[14, 4, 5,7,8]
function callback(list){
    var newList = list.filter( e => e>5 )
    return newList;
   }
const filterData = (a, callback) => {
    return callback(list)
}

var f = filterData(list, callback)

//console.log(f)

const arr = [10, 12, 15, 21];
function testingQ(){
for (var i = 0; i < arr.length; i++) {
 setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
}
//console.log(testingQ());


function a(){
     p = 23;
    console.log(p);
    (function b(){
        let  p= 56
        console.log("Inner", p)
    })
    ()

    if(true){
        let p = 7;
        
    }
    // p =9090
    console.log("OUTER", p);
}
a(); 


///Scoping Hoisting

//hoisting- variable can be used after it has been declared
//unles you are using strict mode
