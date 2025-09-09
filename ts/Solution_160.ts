import { ListNode } from './common/printListNode'
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    function getLen(node: ListNode | null) {
        if (node == null) return 0
        return getLen(node?.next ?? null) + 1
    }
    function getInter(node1: ListNode | null, node2: ListNode | null, len1: number, len2: number) {
        if (!node1 || !node2) return null
        if (node1 === node2) return node1;
        if (len1 > len2) {
            return getInter(node1.next, node2, len1 - 1, len2)
        } else if (len1 < len2) {
            return getInter(node1, node2.next, len1, len2 - 1)
        } else {
            return getInter(node1.next, node2.next, len1 - 1, len2 - 1)
        }
    }
    return getInter(headA, headB, getLen(headA), getLen(headB))
};