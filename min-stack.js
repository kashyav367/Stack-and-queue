var MinStack = function () {
    this.s = [];
};

MinStack.prototype.push = function (val) {
    if (this.s.length === 0) {
        this.s.push([val, val]);
    } else {
        let minVal = Math.min(val, this.s[this.s.length - 1][1]);
        this.s.push([val, minVal]);
    }
};

MinStack.prototype.pop = function () {
    this.s.pop();
};

MinStack.prototype.top = function () {
    return this.s[this.s.length - 1][0];
};

MinStack.prototype.getMin = function () {
    return this.s[this.s.length - 1][1];
};

let obj = new MinStack();

obj.push(1);
obj.push(2);
obj.push(0);

console.log(obj.getMin());

obj.pop();

console.log(obj.getMin());

obj.top();
console.log(obj.getMin());
