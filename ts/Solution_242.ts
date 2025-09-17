function isAnagram(s: string, t: string): boolean {
    // 添加长度检查
    if (s.length !== t.length) {
        return false;
    }

    let map = new Map<string, number>();
    function isA(index: number) {
        if (index === s.length) return;

        // 处理s中的字符
        if (map.has(s[index])) {
            let num: number = map.get(s[index])!;
            map.set(s[index], num + 1);
        } else {
            map.set(s[index], 1);
        }

        // 处理t中的字符
        if (map.has(t[index])) {
            let num: number = map.get(t[index])!;
            map.set(t[index], num - 1);
        } else {
            map.set(t[index], -1);
        }

        isA(index + 1);
    }

    isA(0);

    // 检查所有字符计数是否为0
    for (let value of map.values()) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram("111", "121"))