var str = "gw43g: (-95.147, 38.5818); " +
"jp987h: (" +
  "bvp7: (-97.450, 30.150); " +
  "7g8oi: (" +
     "34ilht: (-82.192997, 29.39719); " +
     "34hb1: (-122.25, 37.47)); " +
  "b238: (-71.0349, 42.2129)); " +
"ao8yh: (-90.147, 42.5818);"

var cnt = 0; // keep count of opened brackets

var result = Array.prototype.reduce.call(str, function(prev, curr) {
  if (curr === '(' && cnt++ === 0) prev.push('');
  if (cnt > 0) prev[prev.length-1] += curr;
  if (curr === ')') cnt--;
  return prev;
}, []);

console.log(result);