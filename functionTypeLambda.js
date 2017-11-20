"use strict";
var foo = function (x) { return 10 + x; };
console.log("functionTypeLambda:: " + foo(100)); //outputs 110 
//Optional parentheses for a single parameter
var display = function (x) {
    console.log("Lambda function got " + x);
};
display(12);
