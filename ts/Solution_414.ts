function thirdMax(nums: number[]): number {
    let map: number[] = []
    function fun(index: number) {
        if (index >= nums.length) return
        for (let i = 0; i < 3; i++) {
            if (!map[i]) {
                map[i] = nums[index]
                break
            } else if (map[i] < nums[index]) {
                map[i] = nums[index]
                break
            }
        }
        fun(index + 1)
    }
    fun(0)
    let min = map[0]
    let max = map[0]
    for (let i = 0; i < map.length; i++) {
        if (map[i] !== null) {
            min = Math.min(min, map[i])
            max = Math.max(max, map[i])
        }

    }

    // 如果有重复的就返回最大的,不然返回第三大的
    for (let i = 1; i < map.length; i++) {
        if (map[i] === map[i - 1]) {
            return max
        }
    }
    return min;
};