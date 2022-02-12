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

function divideBy2(decimalNumber){
    let remainder;
    let remainderStack = new Stack()
    let binaryString = '';

    while(decimalNumber > 0){
        remainder = Math.floor(decimalNumber % 2);
        remainderStack.push(remainder);
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    while(!remainderStack.isEmpty()){
        binaryString = binaryString + remainderStack.pop().toString()
    }
    return binaryString;
}
console.log(divideBy2(10));