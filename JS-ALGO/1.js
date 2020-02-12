// 1. Given a string, reverse the order of characters in each word within a sentence while still preserving white-space and initial word order.
// For Input: "Let's go for a walk.” Output: "s'teL og rof a .klaw"
// In the string, each word is separated by single space and there 
//will not be any extra spaces in the string.

const reverse =(st) =>{
    return st.split(' ').join(' ').split(' ').map(y => {
        return y.split('').reverse().join('')
    })
}

const l = reverse("Let's go for a walk.");
console.log(l.toString());