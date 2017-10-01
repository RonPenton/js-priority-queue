"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryHeapStrategy_1 = require("./BinaryHeapStrategy");
class PriorityQueue {
    constructor(options) {
        this._length = 0;
        this._length = options.initialValues ? options.initialValues.length : 0;
        this.strategy = new BinaryHeapStrategy_1.default(options);
    }
    get length() { return this._length; }
    queue(value) {
        this._length++;
        this.strategy.queue(value);
    }
    dequeue() {
        if (!this._length)
            throw new Error("Empty queue");
        this._length--;
        return this.strategy.dequeue();
    }
    peek() {
        if (!this._length)
            throw new Error("Empty queue");
        return this.strategy.peek();
    }
    clear() {
        this._length = 0;
        this.strategy.clear();
    }
}
exports.default = PriorityQueue;
