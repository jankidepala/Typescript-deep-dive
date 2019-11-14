var foodItems = [
    { type: "chinese", name: "chow mein" },
    { type: "american", name: "burgers" },
    { type: "chinese", name: "wontons" },
    { type: "indian", name: "chicken" },
];

// Output
result = [
    { type: "chinese", name: ["chow mein", "wontons"], count: 2 },
    { type: "america", name: ["burgers"], count: 1 },
    { type: "indian", name: "chicken", count: 1 }
];

const newArr = []
let t = foodItems.filter((sum, i) => {
    // console.log(sum, b);

    if (sum.type === 'chinese') {
        sum.count = 2;
        return sum.name = sum.name.split();
    }
    else {
        sum.count = 1
        sum.name = sum.name.split();
        return sum
    }
})

//console.log('nnn>>',n )
console.log(t)
for (var key in foodItems) {
    console.log(key)

    if (foodItems[key] > 1) {
      // output.push(map[key]);
    }
}
