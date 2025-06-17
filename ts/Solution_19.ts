/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let fast: ListNode | null = dummy;
    let slow: ListNode | null = dummy;

    // 快指针先移动 n+1 步
    for (let i = 0; i <= n; i++) {
        if (fast === null) break;  // 边界保护
        fast = fast.next;
    }

    // 双指针同步移动直到快指针到末尾
    while (fast !== null) {
        fast = fast.next;
        slow = slow!.next;  // 非空断言（slow 不会为 null）
    }

    // 删除目标节点
    if (slow !== null && slow.next !== null) {
        slow.next = slow.next.next;
    }

    return dummy.next;
};