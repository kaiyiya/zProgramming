/**
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。你可以假设数组是非空的，并且给定的数组总是存在多数元素。
示例 1：
输入：nums = [3,2,3]
输出：3
示例 2：
输入：nums = [2,2,1,1,1,2,2]
输出：2
*/
function majorityElement(nums: number[]): number {
    // 优化1: 使用更清晰的函数命名和参数
    function findMajority(left: number, right: number): number {
        // 基础情况
        if (left === right) return nums[left];

        // 分治
        const mid = left + Math.floor((right - left) / 2); // 防止溢出
        const leftMajority = findMajority(left, mid);
        const rightMajority = findMajority(mid + 1, right);

        // 如果两边多数元素相同，直接返回
        if (leftMajority === rightMajority) return leftMajority;

        // 优化2: 只遍历一次统计两个候选元素
        let leftCount = 0, rightCount = 0;
        for (let i = left; i <= right; i++) {
            if (nums[i] === leftMajority) leftCount++;
            else if (nums[i] === rightMajority) rightCount++;
        }

        return leftCount > rightCount ? leftMajority : rightMajority;
    }

    // 优化3: 避免不必要的数组拷贝或额外变量
    return findMajority(0, nums.length - 1);
}

// 测试用例
console.log(majorityElement([3, 2, 3])); // 输出: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 输出: 2