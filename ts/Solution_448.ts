function findDisappearedNumbers(nums: number[]): number[] {
    let set = new Set<number>()
    // 将nums改为set
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }
    function get(index: number) {
        if (index > nums.length) return
        if (set.has(index)) {
            set.delete(index)
        } else set.add(index)
        get(index + 1)
    }
    get(1)
    return [...set]
};