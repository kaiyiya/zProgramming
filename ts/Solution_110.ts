import { TreeNode } from "./common/printTreeNode"
function isBalanced(root: TreeNode | null): boolean {
    // 返回左右子树的高度差
    function getAbsHeight(node: TreeNode | null): number {
        if (node == null) return 0
        if (node.left == null && node.right == null) return 1;

        let resLeft = getAbsHeight(node.left)
        let resRight = getAbsHeight(node.right)
        return Math.max(resLeft, resRight) + 1
    }

    function isBalanceT(node: TreeNode | null) {
        if (node == null) return true;
        if (Math.abs(getAbsHeight(node.left) - getAbsHeight(node.right)) > 1) return false;
        return isBalanceT(node.left) && isBalanceT(node.right)
    }
    return isBalanceT(root)


};