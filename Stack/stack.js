class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        return this.items.push();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.size());  
stack.print();

console.log(stack.pop());
console.log(stack.peek())
