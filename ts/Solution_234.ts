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
import { ListNode, printListNode } from './common/printListNode'
function isPalindrome(head: ListNode | null): boolean {
    function reverse(node: ListNode | null): ListNode | null {
        if (node == null || node.next == null) return node
        let nextHead = reverse(node?.next ?? null)
        node.next.next = node
        node.next = null
        return nextHead;
    }
    function clone(node: ListNode | null) {
        if (node == null) return null
        let newNode = new ListNode(node.val)
        newNode.next = clone(node.next)
        return node
    }
    function isP(node1: ListNode | null, node2: ListNode | null) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        while (node1 && node2) {
            if (node1?.val === node2?.val) {
                node1 = node1?.next;
                node2 = node2?.next;
            } else {
                return false;
            }
        }
        return !node1 && !node2
    }
    let newHead = clone(head)
    let reHead = reverse(newHead)
    return isP(head, reHead)
};


let head = new ListNode(1, new ListNode(2, new ListNode(1)))
console.log(isPalindrome(head));

