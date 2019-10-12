//11
var lo = console.log.bind(console);

var a = [9, 0, 8, 7, 6];
var b = [1, 0, 0, 7, 6];
var p1 = 0;
var p2 = 0;

while (p1 < a.length && p2 < b.length) {
    lo(p1)
    lo(a)
    ++a[p1]
    lo(a)
    p1++;
    p2++;
}