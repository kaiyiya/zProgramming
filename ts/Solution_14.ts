function longestCommonPrefix(strs: string[]): string {
    function fun(index: number): string {
        if (index >= strs[0].length) return ""
        for (let i = 0; i < strs.length; i++)
            if (strs[i][index] != strs[0][index])
                return ""
        return strs[0][index] + fun(index + 1)
    }
    return fun(0)
};


function longestCommonPrefixDP(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = "";

    // 从索引0开始，逐个检查字符
    for (let index = 0; index < strs[0].length; index++) {
        // 检查所有字符串在当前位置的字符是否相同
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][index] != strs[0][index]) {
                return prefix; // 发现不同字符，返回当前累积的前缀
            }
        }
        // 所有字符串在当前位置字符相同，添加到前缀中
        prefix += strs[0][index];
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
