public class Solution_88 {
    public static void main(String[] args) {
        int[] nums1 = new int[] { 0, 1, 12, 451, 888, 0, 0, 0, 0 };
        int[] nums2 = new int[] { 2, 3, 4, 5 };
        // fun(nums1, nums2, 5, 4, 4, 3, 8);

        // merge(nums1, 5, nums2, 4);
        for (int i = 0; i <= nums1.length - 1; i++) {
            System.out.print(nums1[i] + " ");
        }
    }

    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1; // nums1有效元素末尾
        int p2 = n - 1; // nums2末尾
        int p = m + n - 1; // 合并位置末尾

        while (p1 >= 0 && p2 >= 0) {
            nums1[p--] = (nums1[p1] > nums2[p2])
                    ? nums1[p1--]
                    : nums2[p2--];
        }

        // 处理nums2剩余元素
        System.arraycopy(nums2, 0, nums1, 0, p2 + 1);
    }

    // public static void fun(int[] nums1, int[] nums2, int m, int n, int indexM,
    // int indexN, int index) {
    // if (indexM < 0 || indexN < 0 || index < 0)
    // return;
    // if (nums1[indexM] >= nums2[indexN]) {
    // nums1[index--] = nums1[indexM--];
    // } else {
    // nums1[index--] = nums2[indexN--];
    // }
    // fun(nums1, nums2, m, n, indexM, indexN, index);
    // if (indexM < 0)
    // System.arraycopy(nums2, 0, nums1, 0, indexN + 1);

    // }

    private static void mergeRecursive(int[] nums1, int m, int[] nums2, int n, int p1, int p2, int p) {
        // 递归终止条件：nums2已处理完
        if (p2 < 0)
            return;

        // nums1尚未处理完且当前元素更大
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            mergeRecursive(nums1, m, nums2, n, p1 - 1, p2, p - 1);
        }
        // nums2元素更大或nums1已处理完
        else {
            nums1[p] = nums2[p2];
            mergeRecursive(nums1, m, nums2, n, p1, p2 - 1, p - 1);
        }
    }
}