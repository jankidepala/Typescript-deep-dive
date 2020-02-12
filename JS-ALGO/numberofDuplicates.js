var string = [1, 7, 8, 9, 9, 9];
let data = [
    {
        country: 'China',
        pop: 40,
    },
    {
        country: 'India',
        pop: 30,
    },
    {
        country: 'USA',
        pop: 20,
    },
    {
        country: 'Indonesia',
        pop: 10,
    }
]

let sum = data.reduce((acc, val) => {
    return acc + val.pop; //val.country == 'China' ? acc : acc + val.pop;
}, 0);

//console.log(sum)

data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 1,
        type: 'dog'
    },
];

let m = data
    .filter((val, i) => val.type === 'dog')
    .map((m, v) => m.age)
    .reduce((sum, animal) => {
        console.log(sum, animal)
        return sum + animal * 7
    }, 0)

console.log(m)