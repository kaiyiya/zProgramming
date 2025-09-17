function firstUniqChar(s: string): number {
    let map = new Map<string, { firstIndex: number, value: number }>()
    function fun(index: number) {
        if (index === s.length) return
        if (!map.has(s[index])) {
            map.set(s[index], { firstIndex: index, value: 1 })
        } else {
            let res = map.get(s[index])!
            map.set(s[index], {
                firstIndex: res.firstIndex,
                value: res.value + 1
            })
        }
        fun(index + 1)
    }
    fun(0)
    for (let i of map) {
        if (i[1].value === 1) return i[1].firstIndex
    }
    return -1
};