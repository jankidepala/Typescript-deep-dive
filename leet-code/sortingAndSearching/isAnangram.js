// let isAnagram = (s, t) => {
//     let hist = {};
//     for (let i=0; i < s.length; i++) {
//       let char = s[i];
//       if(char in hist) {
//         hist[char]++;
//       } else {
//         hist[char] = 1;
//       }
//     }
//     console.log('aaa',hist)


//     for (let i=0; i < t.length; i++) {
//       let char = t[i];
//       console.log('bb',hist)

//       if(char in hist) {
//         hist[char]--;
//         if(hist[char] == 0){
//           delete hist[char];
//         }
//       } else {
//         //return false;
//       }
//     }
//   console.log('aaa',hist, Object.keys(hist))
//     if(Object.keys(hist).length === 0)
//       return true;
//     return false;
//   }

let isAnagram = (st, t) => {
    let hash = {};

    for (s in st) {
        console.log(s)
        if (hash[st[s]]) {
            hash[st[s]]++
        } else {
            hash[s] = 1
        }
    }

    for (s of t) {
        console.log( s in hash)
        if( s in hash){
            hash[s]--
        } else{
            return false
        }
    }
    console.log(Object.keys(hash).length)

   // Object.keys(hash).length

}
console.log(isAnagram('abcdkaj', 'abcdka'))