
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function reverseList(head: ListNode | null): ListNode | null {
    function reverse(node: ListNode | null): ListNode | null {
        if (node == null) return null;
        let cur: ListNode | null = reverse(node?.next);
        if(cur==null) return node;
        cur.next = node;
        return cur;
    }
    return reverse(head);
};

function printList(head: ListNode | null): void {
    let node: ListNode | null = head;
    while (node != null) {
        console.log(node.val);
        node = node.next;
    }
}
printList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))
printList(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))))