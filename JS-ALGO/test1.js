var s = "Janki"
var b = 'nai' //substring

// s ==b

//for  //filter
var newS = s.split('') //main string array

//chaining , 
b.split('') 
.filter(val => {
    console.log(val)  // a , n , k
    
    var t = newS.forEach( a => {
        console.log(val === a)
        if(val === a){
            return true
        }
        
    })

    console.log('INclude', t)
})


