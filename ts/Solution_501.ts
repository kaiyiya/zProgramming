import { TreeNode } from './common/printTreeNode'
function findMode(root: TreeNode | null): number[] {
    let hashMap = new Map<number, number>()
    let max = 0
    let res: number[] = []
    function write(node: TreeNode | null) {
        if (node === null)
            return
        write(node.left)
        if (!hashMap.get(node.val)) {
            hashMap.set(node.val, 1)
        } else {
            hashMap.set(node.val, hashMap.get(node.val)! + 1)
        }
        max = Math.max(hashMap.get(node.val)!, max)
        write(node.right)
    }
    write(root)
    for (let entry of hashMap) {
        if (entry[1] === max) {
            res.push(entry[0])
        }

    }
    return res
};  