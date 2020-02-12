function flat(array: (number | number[])[]): number[] {
    const f: number[]= [];
    for (const e of array){
        console.log(e, array)
        if(Array.isArray(e)){
            f.push(...e)
            console.log(e , ": isArray")
        }
        else{
            f.push(e)
            console.log(e,":not a Array")
        }
    }
    console.log("FLATTENED ARRAY ",f)
    return f;
}

function GenericsArra<T>(array: (T | T[])[]): array is T[] {
    return !array.some(Array.isArray)
}
const numbers:number[] = [3, 4, 3, 1, 5]
if (GenericsArra(numbers)){
    numbers;
}
//flat([3, 4, [3], 1, 5])