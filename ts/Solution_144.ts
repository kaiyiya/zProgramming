
import { TreeNode } from './common/printTreeNode'
function preorderTraversal(root: TreeNode | null): number[] {
    let res: number[] = []
    function pre(node: TreeNode | null) {
        if (node == null) return;
        res.push(node.val)
        pre(node.left)
        pre(node.right)
    }
    pre(root)
    return res

};