import { TreeNode } from "./common/printTreeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
    function invert(node: TreeNode | null) {
        if (!node) return null

        let node1 = invert(node.left)
        let node2 = invert(node.right)
        node.left = node2 ?? null
        node.right = node1 ?? null
        return node
    }
    return invert(root)



};