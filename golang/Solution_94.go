package main

// TreeNode 定义二叉树节点结构体
type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}

func inorderTraversal(root *TreeNode) []int {
    result := []int{}
    if root == nil {
        return result
    }

    stack := []*TreeNode{}
    current := root

    for current != nil || len(stack) > 0 {
        // 遍历到最左侧节点
        for current != nil {
            stack = append(stack, current)
            current = current.Left
        }

        // 弹出栈顶元素并访问
        topIndex := len(stack) - 1
        current = stack[topIndex]
        stack = stack[:topIndex] // 弹出栈顶元素
        result = append(result, current.Val)

        // 转向右子树
        current = current.Right
    }

    return result
}