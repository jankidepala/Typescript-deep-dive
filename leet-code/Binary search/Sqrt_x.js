/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
    const logic = (low, high) => {
      const mid = low + Math.floor((high - low) / 2);
      const square = mid * mid;
      if (low === mid || square === x) {
        return mid;
      } else if (square > x) {
        return logic(low, mid);
      } else {
        return logic(mid, high);
      }
    };
  
    return logic(1, x);
  };
console.log(mySqrt(24));