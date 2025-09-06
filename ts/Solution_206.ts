
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function reverseList(head: ListNode | null): ListNode | null {
    // 基本情况：空节点或只有一个节点
    if (head === null || head.next === null) {
        return head;
    }

    // 递归反转剩余部分
    const newHead = reverseList(head.next);

    // 反转当前连接
    head.next.next = head;
    head.next = null;

    // 返回新的头节点
    return newHead;
}

function printList(head: ListNode | null): void {
    let node: ListNode | null = head;
    while (node != null) {
        console.log(node.val);
        node = node.next;
    }
}
printList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))
printList(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))))