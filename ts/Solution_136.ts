function singleNumber(nums: number[]): number {
    // 碰撞相消
    function block(index: number) {
        if (index >= nums.length) return 0;
        let r = block(index + 1)
        return nums[index] ^ r
    }
    return block(0)
};