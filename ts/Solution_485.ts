function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0
    function getM(index: number) {
        let step = 1
        let cur = index
        if (index < 0) return;
        while (cur >= 0 && nums[cur] === 1) {
            cur--;
            if (cur != index)
                step++;
        }
        max = Math.max(max, index-cur)
        getM(index - step);
    }
    getM(nums.length - 1)
    return max
};