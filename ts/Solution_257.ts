import { TreeNode } from './common/printTreeNode'
function binaryTreePaths(root: TreeNode | null): string[] {
    const paths: string[] = [];

    function dfs(node: TreeNode | null, path: string): void {
        if (node === null) return;

        // 构造当前路径
        const currentPath = path ? `${path}->${node.val}` : `${node.val}`;

        // 如果是叶节点，添加完整路径
        if (node.left === null && node.right === null) {
            paths.push(currentPath);
            return;
        }

        // 递归处理子节点
        dfs(node.left, currentPath);
        dfs(node.right, currentPath);
    }

    dfs(root, "");
    return paths;
}