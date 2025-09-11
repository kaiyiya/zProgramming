import { TreeNode } from "./common/printTreeNode";
function maxDepth(root: TreeNode | null): number {
    function getMaxDepth(node: TreeNode | null) {
        if (node == null) return 0
        if (node != null && node.left == null && node.right == null) return 1;
        let left = getMaxDepth(node.left)
        let right = getMaxDepth(node.right)
        return Math.max(left, right) + 1;
    }
    return getMaxDepth(root)

};