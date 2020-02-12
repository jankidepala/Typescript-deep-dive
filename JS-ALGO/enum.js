//Enums allow us to define a set of named numeric constants. An enum can be defined using the enum keyword.
var Rectangle;
(function (Rectangle) {
    Rectangle[Rectangle["weight"] = 50] = "weight";
    Rectangle[Rectangle["pi"] = 3.14] = "pi";
})(Rectangle || (Rectangle = {}));
var length = (2 * Rectangle.pi);
console.log(Rectangle);
console.log(length * 4);
