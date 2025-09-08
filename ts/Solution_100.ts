import { TreeNode } from "./common/printTreeNode";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    function isSame(node1: TreeNode | null, node2: TreeNode | null) {
        if (node1 == null && node2 != null || node1 != null && node2 == null) return false;
        if (node1 == null && node2 == null) return true;
        return node1?.val == node2?.val && isSame(node1?.left ?? null, node2?.left ?? null) && isSame(node1?.right ?? null, node2?.right ?? null)
    }
    return isSame(p, q)
};