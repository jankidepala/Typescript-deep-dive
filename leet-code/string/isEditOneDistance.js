const isOneEditDistance = (s, t) =>{

    const longer = s.length > t.length ? s : t;
    const shorter = s.length > t.length ? t : s;

    if (longer.length - shorter.length > 1) {
        return false;
    }
    
    let count = 0, i = 0, j = 0;
    
    while (i < longer.length) {
        console.log(longer[i] , shorter[j] );
        if (longer[i] !== shorter[j]) {
            count++;

            if (longer.length > shorter.length) {
            	i++;
            	continue;
            }
        }
        
        i++;
        j++;
    }
    
    return count === 1;

    console.log(longer, shorter)
}

console.log( isOneEditDistance('zab', 'acdee') )