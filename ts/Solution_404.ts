import { TreeNode } from './common/printTreeNode'

function sumOfLeftLeaves(root: TreeNode | null): number {
    function sum(node: TreeNode | null, flag: boolean): number {
        if (!node) return 0
        if (node.left === null && node.right === null) {
            if (flag) return node.val
            return 0
        }
        return sum(node.left, true) + sum(node.right, false)
    }
    return sum(root, false)
};

