//UnionThingType  ="As";
var retSomething = function (s) {
    console.log(typeof s);
    if (s instanceof Array) {
        var b_1 = "";
        s.forEach(function (t) {
            console.log(t);
            b_1 += "" + t;
            console.log(b_1);
        });
    }
};
retSomething(["Lion", "Tiger"]);
