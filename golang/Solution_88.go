func merge(nums1 []int, m int, nums2 []int, n int) {
    p1 := m - 1 // nums1 有效元素末尾
    p2 := n - 1 // nums2 末尾
    p := m + n - 1 // 合并位置末尾
    
    // 从后向前合并两个有序数组
    for p1 >= 0 && p2 >= 0 {
        if nums1[p1] > nums2[p2] {
            nums1[p] = nums1[p1]
            p1--
        } else {
            nums1[p] = nums2[p2]
            p2--
        }
        p--
    }
    
    // 处理 nums2 剩余元素
    if p2 >= 0 {
        copy(nums1[:p+1], nums2[:p2+1])
    }
}