var chai = require('chai');
var expect = chai.expect;

const PriorityQueue = require('../index').default;
const numberCompare = ((a, b) => a - b);

describe('integration tests', () => {
    it('should enqueue options.initialValues', () => {
        const queue = new PriorityQueue({ comparator: numberCompare, initialValues: [3, 1, 2] });
        expect(queue.length).to.equal(3);
        expect(queue.dequeue()).to.equal(1);
        expect(queue.dequeue()).to.equal(2);
        expect(queue.dequeue()).to.equal(3);
    });

    it('should stay sorted', () => {
        const queue = new PriorityQueue({ comparator: numberCompare });

        var sorted = [];
        for(var i = 0; i < 10000; i++) {
            const x = Math.random() * 10000;
            sorted.push(x);
            queue.queue(x);
        }

        sorted.sort((a,b) => a - b);

        while(queue.length) {
            expect(queue.dequeue()).to.equal(sorted.shift());
        }
    });
});
