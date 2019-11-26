const guessNumber = (n) => {
    const logic = (low, high) => {
        const mid = low + Math.floor((high - low) / 2)
        console.log("mid", mid)
        if (n<=0 ) {
        return logic(0, mid);
        }
    }
    return logic(1, 16)
}

console.log(guessNumber(8));