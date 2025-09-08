import { TreeNode } from "./common/printTreeNode";
function minDepth(root: TreeNode | null): number {

    // 函数的作用是返回二叉树的最小深度
    function getMinDepth(node: TreeNode | null) {
        if (node == null) return 0;
        if (node.left == null && node.right == null) return 1;


        let resLeft = getMinDepth(node.left)
        if (resLeft == 0) resLeft = Number.MAX_VALUE
        let resRight = getMinDepth(node.right)
        if (resRight == 0) resRight = Number.MAX_VALUE
        return Math.min(resLeft, resRight) + 1
    }
    return getMinDepth(root)
};