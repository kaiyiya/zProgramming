import { TreeNode } from "./common/printTreeNode"
function countNodes(root: TreeNode | null): number {
    if (!root) return 0
    return countNodes(root.left) + countNodes(root.right) + 1
};