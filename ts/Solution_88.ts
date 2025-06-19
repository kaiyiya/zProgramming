/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1;    // nums1 有效元素末尾
    let p2 = n - 1;    // nums2 末尾
    let p = m + n - 1; // 合并位置末尾

    // 从后向前合并两个有序数组
    while (p1 >= 0 && p2 >= 0) {
        nums1[p--] = nums1[p1] > nums2[p2]
            ? nums1[p1--]
            : nums2[p2--];
    }

    // 处理 nums2 剩余元素（如果有）
    while (p2 >= 0) {
        nums1[p--] = nums2[p2--];
    }
};