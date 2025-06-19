/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return result;

  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;

  while (current !== null || stack.length > 0) {
    // 遍历到最左侧节点
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // 访问当前节点
    current = stack.pop()!;
    result.push(current.val);

    // 转向右子树
    current = current.right;
  }

  return result;
}
