function MyStack() {
    this.q = [];
}

MyStack.prototype.push = function (x) {
    this.q.push(x);
};

MyStack.prototype.pop = function () {
    let n = this.q.length;

    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }

    return this.q.shift();
};

MyStack.prototype.top = function () {
    let n = this.q.length;

    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }

    let front = this.q[0];      
    this.q.push(this.q.shift());

    return front;
};

MyStack.prototype.empty = function () {
    return this.q.length === 0;
};

const stack =  new MyStack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Top:" , stack.top());
console.log("Pop:" , stack.pop());
console.log("Top:" , stack.top());
console.log("empty:" , stack.empty());

