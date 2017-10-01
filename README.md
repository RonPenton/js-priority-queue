Priority Queue
==============

A priority queue is a data structure with these operations:

| Operation | Syntax (ts-priority-queue) | Description |
| --------- | --- | ----------- |
| Create | `var queue = new PriorityQueue();` | Creates a priority queue |
| Queue | `queue.queue(value);` | Inserts a new value in the queue |
| Length | `var length = queue.length;` | Returns the number of elements in the queue |
| Peek | `var firstItem = queue.peek();` | Returns the smallest item in the queue and leaves the queue unchanged |
| Dequeue | `var firstItem = queue.dequeue();` | Returns the smallest item in the queue and removes it from the queue |
| Clear | `queue.clear();` | Removes all values from the queue |

You cannot access the data in any other way: you must dequeue or peek.

Provides an O(log n) approach to priority queue insertions and removals. I forked this from the CoffeeScript js-priority-queue library so that I could write it in TypeScript. I've removed the array- and BHeap-based strategies as they were not recommended for use anyway. 

Installing
==========

You can `npm install ts-priority-queue`

Then write code like this:

```ts
var queue = new PriorityQueue({ comparator: function(a, b) { return b - a; }});
queue.queue(5);
queue.queue(3);
queue.queue(2);
var lowest = queue.dequeue(); // returns 5
```

Options
=======

How exactly will these elements be ordered? Let's use the `comparator` option.
This is the argument we would pass to
[Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort):

```ts
var compareNumbers = function(a, b) { return a - b; };
var queue = new PriorityQueue({ comparator: compareNumbers });
```

You can also pass initial values, in any order. With lots of values, it's
faster to load them all at once than one at a time.

```ts
var queue = new PriorityQueue({ comparator: compareNumbers, initialValues: [ 1, 2, 3 ] })
```

Complexity:

| Operation | Complexity |
| --------- | ----------- |
| Create | O(n lg n) |
| Queue | O(lg n) |
| Peek | O(1) |
| Dequeue | O(lg n) |

License
=======

[Public Domain](http://creativecommons.org/publicdomain/zero/1.0/). Do with it what you
will.
