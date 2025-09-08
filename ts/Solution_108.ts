import { TreeNode } from "./common/printTreeNode";
function sortedArrayToBST(nums: number[]): TreeNode | null {
    // 递归函数的作用是将数组转化为平衡二叉树
    function toBalanceTree(start: number, end: number) {
        if (start == end) return new TreeNode(nums[start])
        else if (start > end) return null
        let mid = Math.floor((start + end) / 2)
        let head = new TreeNode(nums[mid])
        head.left = toBalanceTree(start, mid - 1);
        head.right = toBalanceTree(mid + 1, end);
        return head;
    }
    return toBalanceTree(0, nums.length - 1)


};