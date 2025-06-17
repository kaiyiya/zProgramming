public class Solution_19 {

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(3);
        l1.next.next.next = new ListNode(4);
        l1.next.next.next.next = new ListNode(5);
        l1.next.next.next.next.next = new ListNode(6);
        l1.next.next.next.next.next.next = new ListNode(7);
        ListNode l2 = removeNthFromEnd(l1, 2);
        // while (l2 != null) {
        // System.out.println(l2.val);
        // l2 = l2.next;
        // }
    }

    public static ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0, head); // 哨兵节点简化边界处理
        ListNode fast = dummy, slow = dummy;

        // 快指针先走 n+1 步
        for (int i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // 双指针同步移动直到末尾
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }

        // 删除目标节点
        slow.next = slow.next.next;
        return dummy.next;
    }

    public static ListNode removeNthFromEnd1(ListNode head, int n) {
        // 创建哨兵节点处理边界情况
        ListNode dummy = new ListNode(0, head);
        // 递归计算节点位置并删除
        removeHelper(dummy, n);
        return dummy.next;
    }

    private static int removeHelper(ListNode node, int n) {
        if (node == null)
            return 0;
        // 递归到链表尾部
        int position = removeHelper(node.next, n) + 1; // 当前节点的倒数位置
        // 当找到目标节点的前驱时执行删除
        if (position == n + 1) {
            node.next = node.next.next; // 删除目标节点
        }
        return position;
    }

}

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}