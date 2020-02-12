function maxSubArraySum(arr, n) {
    let t = arr.reduce((prev, next) => {
        return prev + n > next + n ? prev : next
    })
    return t;
}
maxSubArraySum([7, 4, 2, 3, 0, 5], 6)  //ANSWER: 11

console.log(maxSubArraySum([7, 4, 2, 3, 0, 5], 6))

const users = [
    {
        id: 1,
        name: "Jonathon Haley",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password"
    },
    {
        id: 2,
        name: "Dean John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password"
    }
];
let p ={}
for ( let key in users){
    p[users[1]] = 'sdds'
    console.log(key, "ey")
}
console.log(p)
let u = Object.assign({}, users, 'sdsadds')
console.log(u)
