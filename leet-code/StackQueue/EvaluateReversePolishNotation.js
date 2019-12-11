function evalRPN(tokens) {
    const stack = [];

    for (let token of tokens) {
        console.log( token );
        console.log('----', stack)
        if (token === '+') {
            console.log('kkkkk',stack)

            stack.push(stack.pop() + stack.pop());
            console.log('kkkkk',stack)
        } else if (token === '-') {
            stack.push(-stack.pop() + stack.pop());
        } else if (token === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (token === '/') {
            stack.push(Math.trunc(1 / stack.pop() * stack.pop()));
        } else {
            stack.push(parseInt(token));
        }
        console.log('++++', stack)

    }

    return stack[0];
}

var t = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(t));