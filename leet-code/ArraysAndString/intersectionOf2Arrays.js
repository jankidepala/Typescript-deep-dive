const intersection = (nums1, nums2) => {
    const map = new Map();
    for (const n of nums1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }
    console.log('----', map);

    const result = [];
    for (const n of nums2) {
        console.log('++', n, map.has(n), map.get(n))
        if (map.has(n) && map.get(n) > 0) {
            result.push(n);
            map.set(n, map.get(n) - 1);
        }
    }
    console.log(result);

    return result;
}
//----------------------------------------------------
//Map::
// console.log(intersection( [2,3,4, 3], [5,2,3, 1, 4]))

// var map1 = new Map([[1 , 2], [2 ,3 ] ,[4, 5]]); 

// console.log("Map1 ---"); 
// map1.set('7', 8)
// console.log(map1); 
// console.log(map1.has('7')); 
// console.log(map1.entries()); 

// console.log(map1.values()); 
// for(var t of map1.values())
// console.log('---',t)

// map1.forEach( n => console.log('++',n))

// var getit = map1[Symbol.iterator](); 
// console.log(getit)
//----------------------------------------------------
//Map::

const intersection1 = (nums1, nums2) => {
    const m = new Map();

    for (const i in nums1) {
        m.set(nums1[i], i);
    }

    const result = [];
    for (n in nums2) {

        console.log(nums2[n], m, m.has(n))

        if (m.has( nums2[n] )) {
            result.push( nums2[n] )
        }
        console.log('==', n)
    }
    console.log(result)
}
var intersect = function(nums1, nums2) {
    const count = {};
    
    for (let i = 0; i < nums1.length; i++) {
        const curr = nums1[i];
        if (count[curr] == null) {
            count[curr] = 1;
        } else {
            count[curr]++;
        }
    }
    
    
    const result = [];

    for (let i = 0; i < nums2.length; i++) {
        const curr = nums2[i];
        if (count[curr] > 0) {
            result.push(curr);
            count[curr]--;
        }
    }
    console.log(result)

    return result;
};

console.log(intersect([2, 3, 4, 3], [4, 5, 2, 3, 1]))