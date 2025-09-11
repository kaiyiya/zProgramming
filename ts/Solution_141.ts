import { ListNode } from './common/printListNode'
function hasCycle(head: ListNode | null): boolean {
    //    快慢指针判断环
    function isCycle(fast: ListNode | null, slow: ListNode | null) {
        if (fast == null || slow == null) return false
        if (fast == slow) return true;
        return isCycle(fast.next?.next ?? null, slow.next)
    }
    return isCycle(head?.next ?? null, head)
};