const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

//const bar = Object.create(job)
// const bar = Object.entries(job)
// for(b in bar){
//     console.log(b)
// }

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express',
    tr:[{
        age: 11,
        name: 'John'
    },
    {
        age: 11,
        name: 'Kim'
    },
    {
        age: 10,
        name: 'Tim'
    }

]
};
let o=[]
const newO = () => {
for(l of details.tr){
    if( l.age ===11) o.push(l)
    }
}
const character = {...job, ...details}
newO()
console.log(o)
