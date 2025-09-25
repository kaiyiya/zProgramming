function longestPalindrome(s: string): number {
    let res = 0
    let map = new Map<string, number>()

    function lon(index: number) {
        if (index >= s.length) return;
        if (map.has(s[index])) {
            map.set(s[index], map.get(s[index])! > 0 ? map.get(s[index])! - 1 : 1)
            if (map.get(s[index]) === 0) res += 2
        } else {
            map.set(s[index], 1)
        }
        lon(index + 1)
    }
    lon(0)
    for (let i of map) {
        if (i[1] === 1) {
            return res + 1
        }
    }
    return res;
};