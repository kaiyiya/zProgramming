class MyQueue {
    private stack1: number[] = [];
    private stack2: number[] = [];

    constructor() {
        // 初始化两个栈
    }

    /**
     * 将元素推入队列的末尾
     * @param x 要推入的元素
     */
    push(x: number): void {
        // 直接将元素压入第一个栈
        this.stack1.push(x);
    }

    /**
     * 从队列的开头移除并返回元素
     * @returns 队列开头的元素
     */
    pop(): number {
        // 如果第二个栈为空，则将第一个栈的所有元素转移到第二个栈
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }

        // 从第二个栈弹出元素（即队列的开头）
        return this.stack2.pop()!;
    }

    /**
     * 返回队列开头的元素但不移除它
     * @returns 队列开头的元素
     */
    peek(): number {
        // 如果第二个栈为空，则将第一个栈的所有元素转移到第二个栈
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }

        // 返回第二个栈的栈顶元素（即队列的开头）
        return this.stack2[this.stack2.length - 1];
    }

    /**
     * 检查队列是否为空
     * @returns 如果队列为空则返回true，否则返回false
     */
    empty(): boolean {
        // 当两个栈都为空时，队列为空
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

/**
 * 使用示例：
 * 
 * const myQueue = new MyQueue();
 * myQueue.push(1); // queue is: [1]
 * myQueue.push(2); // queue is: [1, 2]
 * console.log(myQueue.peek()); // returns 1
 * console.log(myQueue.pop());  // returns 1, queue is [2]
 * console.log(myQueue.empty()); // returns false
 */