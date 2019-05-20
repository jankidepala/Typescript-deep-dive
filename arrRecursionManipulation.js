var obj =[
{id: 'lab', 'parent': 'dog'},
{id: 'puppy', 'parent': 'dog'},
{id: 'chihua', 'parent': 'dog'},
{id: 'siam', 'parent': 'cats'},
]

const makeTree = (obj, parent) =>{
    console.log("ADD")
    let node ={}
    var ani =  []
    obj.filter( e => e.parent == "dog"
    ).forEach(c => {
        
        ani.push(c.id);
       // node["animal"] = ani
      //  node[c.id] = makeTree(obj, c.id);

        console.log("ASA",c)
        
    })
    console.log(ani)
    node["animal"] = ani;
    console.log(node)

    return node;
}

makeTree(obj);
console.log( 7%2 )
const icecreamColors = {
    chocolate: 'brown',
    vanilla: 'white',
    strawberry: 'red',
}

const colors = Object.values(icecreamColors);
const colors1 = Object.keys(icecreamColors);
console.log(colors)
console.log(colors1)

// colors will be equal to ["brown", "white", "red"]