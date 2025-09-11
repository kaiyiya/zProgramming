export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
// 打印一颗树
export function printTreeNode(root: TreeNode | null) {
    if (root == null) {
        return;
    }
    console.log(root.val);
    printTreeNode(root.left);
    printTreeNode(root.right);
}
