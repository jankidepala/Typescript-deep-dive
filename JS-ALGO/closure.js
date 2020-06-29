var a = 7
function outer(p) {
  const b = 100;
  // var a= 5
  function inner() {
    a = p
    //console.log(a+b);
  }
  return inner
}

var X = outer(8);
var Y = outer(9);
//end of outer() function executions
X() // X() invoked the first time
Y()

function t() {
  for (var i = 0; i < 3; i++) {
    console.log("loop", i)
    setTimeout(function () { console.log(i); }, 1000 + i);

  }
}

//t();

function outer(baseNumber) {
  return function (N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return function (M) {
      return baseNumber + N + M
    }
  }
}
//console.log(outer(34)(6)(1));

var m = (t) => {
  for (var i = 0; i < 3; i++) {
    setTimeout(function (j) {
      return console.log(j)pr
    }(i), 1000 + i);
  }
}
//m(6);

var counter = function () {
  var _counter = 5;
  return {
    add: function (num) { _counter += num; },
    retrieve: function () { return "the value of counter is currently: " + _counter; }
  };
};

var count = counter();
count.add(4);
count.add(5);

count.add(1);

count.retrieve(); //==> 'the value of counter is currently: 5'
console.log(count.retrieve())
