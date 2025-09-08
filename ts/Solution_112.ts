import { TreeNode } from "./common/printTreeNode";
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root == null) return false;
    if (root.left == null && root.right == null) {
        return targetSum == root.val
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};