function cricket() {
    return {
        score: function () { return 1; },
        addLives: function (n) { }
    };
}
var Beth = /** @class */ (function () {
    function Beth() {
    }
    Beth.prototype.score = function () {
        return 4;
    };
    ;
    Beth.prototype.addLives = function (n) { return 4; };
    ;
    return Beth;
}());
var eden = cricket();
console.log("Interface ::", eden);
console.log("Interface score ::", eden.score());
console.log(Beth);
var b = new Beth();
console.log(b.addLives(6));
