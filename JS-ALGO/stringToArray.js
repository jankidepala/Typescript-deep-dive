var foodItems = [
  { type: "chinese", name: "chow mein" },
  { type: "american", name: "burgers" },
  { type: "chinese", name: "wontons" },
  { type: "indian", name: "chicken" },
];

function AddObj(food) {

}

// Output
result = [
  { type: "chinese", name: ["chow mein", "wontons"], count: 2 },
  { type: "america", name: ["burgers"], count: 1 },
  { type: "indian", name: "chicken", count: 1 }
];

//

function areThereDuplicates(...a) {
  let y = [...new Set(a)]
  console.log(y.length === a.length)
  return y.length !== a.length

}
console.log(areThereDuplicates(1, 6, 8))