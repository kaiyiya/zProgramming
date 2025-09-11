// 打印链表
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export function printListNode(head: ListNode | null) {
    let node = head
    while (node) {
        console.log(node.val)
        node = node.next
    }
}


// 制造一个新链表
export function makeListNode(arr: number[]): ListNode | null {
    let head = new ListNode()
    let node = head
    for (let i = 0; i < arr.length; i++) {
        node.val = arr[i]
        node.next = new ListNode()
        node = node.next
    }
    return head
}