function strStr(haystack: string, needle: string): number {
    if (needle === "") return 0;
    
    // 构建next数组（部分匹配表）
    const next: number[] = [0];
    for (let i = 1, j = 0; i < needle.length; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = next[j - 1];
        }
        if (needle[i] === needle[j]) {
            j++;
        }
        next[i] = j;
    }
    
    // KMP匹配过程
    for (let i = 0, j = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1];
        }
        if (haystack[i] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i - needle.length + 1;
        }
    }
    
    return -1;
}