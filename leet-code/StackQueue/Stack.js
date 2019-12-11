class Stack extends Array {
    constructor(...elems){
        super(...elems);
    }

    pop(){
        super.pop();
    }


}

const str = '[{}]'

const check = (str) => {
    const stack = new Stack();

    const arr = str.split('');
    for( let i=0; i<arr.length; i++){
        const currElem = arr[i]
        console.log(arr[i])
    }
}

check(str);
