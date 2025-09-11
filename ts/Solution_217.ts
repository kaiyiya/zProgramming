function containsDuplicate(nums: number[]): boolean {
    let map = new Map<number, number>()
    let flag = false;
    function hasDup(index: number) {
        if (index == nums.length) return
        const currentCount = map.get(nums[index]) ?? 0;
        map.set(nums[index], currentCount + 1);
        const currentCount1 = map.get(nums[index]) ?? 0;
        if (currentCount1  >= 2) { flag = true }
        hasDup(index + 1)
    }
    hasDup(0)
    return flag
};
 