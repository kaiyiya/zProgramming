function repeatedSubstringPattern(s: string): boolean {
    function contains(a: string, b: string) {//a是否由b拼接成
        if (a.length % b.length !== 0) return false;
        for (let i = 0; i < a.length; i += b.length) {
            console.log(a.slice(i, i + b.length))
            if (a.slice(i, i + b.length) !== b)
                return false
        }
        return true
    }

    function has(len: number): boolean {
        if (len > Math.floor(s.length / 2)) return false
        let res = contains(s, s.slice(0, len))
        return res || has(len + 1)
    }
    return has(1)
};
repeatedSubstringPattern("a")