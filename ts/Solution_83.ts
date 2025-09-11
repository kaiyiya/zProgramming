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
import { printListNode, ListNode, makeListNode } from "./common/printListNode";
function deleteDuplicates(head: ListNode | null): ListNode | null {
    // 这个递归函数的作用是删除之后的链表的重复元素
    function deleteDU(node: ListNode | null) {
        if (node === null || node.next === null) return;
        deleteDU(node.next)
        if (node.val === node.next.val)
            node.next = node.next.next;
    }
    deleteDU(head)
    return head;
};
printListNode(deleteDuplicates(makeListNode([1, 1, 2])))
