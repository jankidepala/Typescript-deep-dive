"use strict";
var mov = [
    'B', 'L', 'A'
];
var newA = mov.slice().sort();
//console.log({mov});
//console.log(newA);
var s = [1, 'z', 6, 2, 11, 5, 'a'];
s.sort(function (a, b) { return a - b; });
//console.log("s", s)
var data = [
    {
        name: 'AAA',
        year: 2008
    },
    {
        name: 'ffff',
        year: 34
    },
    {
        name: 'CCCC',
        year: 45
    }
];
var t = data.sort(function (a, b) { return a.year - b.year; }); //O(n logn)
console.log("Data sort ", t);
