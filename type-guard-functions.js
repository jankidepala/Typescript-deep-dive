function flat(array) {
    var f = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var e = array_1[_i];
        console.log(e, array);
        if (Array.isArray(e)) {
            f.push.apply(f, e);
            console.log(e, ": isArray");
        }
        else {
            f.push(e);
            console.log(e, ":not a Array");
        }
    }
    console.log("FLATTENED ARRAY ", f);
    return f;
}
function GenericsArra(array) {
    return !array.some(Array.isArray);
}
var numbers = [3, 4, 3, 1, 5];
if (GenericsArra(numbers)) {
    numbers;
}
//flat([3, 4, [3], 1, 5]) 
