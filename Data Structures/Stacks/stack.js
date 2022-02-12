/*
function Stack(){
    let items = [];

    this.push = function(element){
        items.push(element);
    }

    this.pop = function(element){
        items.pop(element);
    }

    this.peek = function(){
        return items[items.length - 1];
    }

    this.isEmpty = function(){
        return items.length == 0;
    }

    this.size = function(){
        return this.items.length;
    }

    this.clear = function(){
        items = [];
    }

    this.print = function(){
        console.log(items.toString());
    }
}

let stack = new Stack()
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek())
stack.print();
*/