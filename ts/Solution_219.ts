function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map<number, number>()
    function fun(index: number): boolean {
        if (index === -1) return false;
        let res = false
        if (map.has(nums[index])) {
            const pre = map.get(nums[index])
            if (pre)
                res = Math.abs(pre - index) <= k
        }
        map.set(nums[index], index)
        return res || fun(index - 1)
    }
    return fun(nums.length - 1)

}


