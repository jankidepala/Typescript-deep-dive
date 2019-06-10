
let element = (document.querySelectorAll('a'))
//document.getElementById("yy").innerHTML = element[0].text;
console.log(element)

console.log(Array.isArray(element) //=> false
);
var m = new Map();

let coordinates = element.forEach(p => {
    console.log(p)
    m.set(p.getBoundingClientRect().x, p.getBoundingClientRect().y);
})

console.log(m)