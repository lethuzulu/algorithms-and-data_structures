let Queue = (function(){
    const items = new WeakMap();

    class Queue{
        constructor(){
            items.set(this, []);
        }

        enqueue(element){
            let s = items.get(this);
            s.push(element)
        }
    
        dequeue(){
            let s = items.get(this);
            let r = s.shift();
            return r;
        }
    
        front(){
            let s = items.get(this)
            return s[0];
        }
    
        isEmpty(){
            let s = items.get(this)
            return s.length == 0;
        }
    
        size(){
            let s = items.get(this)
            return s.length;
        }
    
        print(){
            console.log(items.get(this).toString());
        }
    }
})