/**Simply put: A callback is a function that is to be executed after another 
 function has finished executing — hence the name ‘call back’.

in javascript, functions are objects
function can take function as an argument
these are higher-order functions
 */

//asyncronous ops
function a() {
    try {
        consjjole.log("SSS")
    } catch (error) {
        console.log("error")
    }
    return "AS"
}

var s = a();
console.log(s)

//Promise

function P() {
    return new Promise(function (resolve, reject) {
        // getData(a, function (err, result) {
        //     if(err){
        //         reject(err)
        //     }else{
        //         resolve(result)
        //     }
        // })
    })


}
//fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected
var promise = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 90) {
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

promise.then(function () {

}).catch(function () {
    console.log("err")

})

promise.then(
    () => { console.log("reso") }
).catch(err => {
    console.log(err)
})



const delay = (ms) => new Promise(
    (resolve) => setTimeout(resolve, ms)
)``

setTimeout(() => {
    //console.log("HHHHH")
}, 3000)

var t = [1, 2, 3, 0]
function m(n) {
    t.forEach(element => {
        setInterval((j) => {
            console.log(element, n, j, "----JJ")
        }, 2000, 7)
    });
}
//
//m(2)








var h = [1, 5, 7, 8]
//number, add, number to array
//console.log( Array.from(h.toString()))

//const n = 12345;
//let toIntArray = (n) => ([...n + ''].map(t => { return t * 2 }));
//console.log(toIntArray(n));

var n = [1, 9,6, 9, 9];
function add(n1) {
    var f = Number(n1.join(''))
    f = f + 1;
    return f.toString().split('').map((Number))
}

var addOne = function(source) {
    return Array.isArray(source) ? (Number.parseInt(source.join('')) + 1).toString().split('').map(Number) : source;
   }
console.log(addOne(n));