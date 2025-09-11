class MyStack {
    queue1: number[]
    queue2: number[];
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }

    push(x: number): void {
        this.queue1.push(x)
    }

    pop(): number {
        // 将queue1中除了最后一个元素外的所有元素移到queue2
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift()!)
        }
        // 取出最后一个元素作为栈顶元素
        const topElement = this.queue1.shift()!
        // 交换两个队列，使queue1始终保持为主队列
        while (this.queue2.length > 0) {
            this.queue1.push(this.queue2.shift()!)
        }
        return topElement
    }

    top(): number {
        // 返回队列末尾元素（即栈顶）
        return this.queue1[this.queue1.length - 1]
    }

    empty(): boolean {
        // 判断主队列是否为空
        return this.queue1.length === 0
    }
}