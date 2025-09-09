function postorderTraversal(root: TreeNode | null): number[] {
    let res: number[] = []
    function pos(node: TreeNode | null) {
        if (node == null) return;
        pos(node.left)
        pos(node.right)
        res.push(node.val)
    }
    pos(root)
    return res
};