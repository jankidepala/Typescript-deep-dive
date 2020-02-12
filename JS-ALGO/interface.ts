interface Game {
  score(): number;
  addLives(n: number): void;
  name?: string;  
}
function cricket(): Game {
  return {
    score: function() {return 1},
    addLives: function(n: number) {}
  };
}
class Beth implements Game{
    public name: string;
    score(): number {
        return 4
    };
    addLives(n:number) { return 4};
}
var eden = cricket();
console.log("Interface ::",eden);
console.log("Interface score ::",eden.score());
console.log(Beth)
var b = new Beth();
console.log(b.addLives(6));