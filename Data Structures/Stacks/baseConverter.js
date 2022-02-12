/* Converts from decimal to any base*/

let  Stack = (function(){
    const items = new WeakMap();

    class Stack{
        constructor(){
            items.set(this, []);
        }
    
        push(element){
            let s = items.get(this);
            s.push(element);
        }
    
        pop(){
            let s = items.get(this)
            let r = s.pop();
            return r;
        }

        peek(){
            let s = items.get(this);
            return s[s.length - 1];
        }
        isEmpty(){
            let s = items.get(this);
            return s.length == 0;
        }

        size(){
            let s = items.get(this);
            return s.length;
        }
        clear(){
            items.set(this, []);
        }

    }

    return Stack;
})();

function divideBy2(decimalNumber, base){
    let remainder;
    let remainderStack = new Stack()
    let binaryString = '';

    let digits = '0123456789ABCDEF'

    while(decimalNumber > 0){
        remainder = Math.floor(decimalNumber % base);
        remainderStack.push(remainder);
        decimalNumber = Math.floor(decimalNumber / base);
    }

    while(!remainderStack.isEmpty()){
        binaryString = binaryString + digits[remainderStack.pop()];
    }
    return binaryString;
}
console.log(divideBy2(10, 16));