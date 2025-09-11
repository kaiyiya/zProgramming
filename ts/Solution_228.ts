function summaryRanges(nums: number[]): string[] {
    let arr: string[] = []
    function summary(index: number) {
        if (index < 0) return;
        let step = 1;
        // 从当前位置向前查找连续序列
        while (index - step >= 0 && nums[index - step + 1] === nums[index - step] + 1) {
            step++;
        }
        // 根据步长添加结果
        if (step === 1) {
            arr.push(nums[index] + '');
        } else {
            arr.push(nums[index - step + 1] + '->' + nums[index]);
        }
        // 递归处理前面的部分
        summary(index - step);
    }
    summary(nums.length - 1);
    return arr.reverse(); // 因为是从后往前处理，需要反转结果
}