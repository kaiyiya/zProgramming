
import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */

public class Solution_94 {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public static void main(String[] args) {

    }

    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new LinkedList<>();
        fun(root, res);
        return res;
    }

    public static void fun(TreeNode head, List<Integer> list) {
        if (head == null)
            return;
        fun(head.left, list);
        list.add(head.val);
        fun(head.right, list);
    }

    public static void fun1(TreeNode head, List<Integer> list) {
        if (head == null)
            return;

        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = head;

        while (curr != null || !stack.isEmpty()) {
            // 遍历到最左侧节点
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }
            // 访问当前节点
            curr = stack.pop();
            list.add(curr.val);
            // 转向右子树
            curr = curr.right;
        }
    }

}