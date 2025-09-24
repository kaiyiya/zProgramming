function isSubsequence(s: string, t: string): boolean {
    function fun(indexS: number, indexT: number) {
        if (indexS >= s.length) return true;
        else if (indexT >= t.length) return false
        let res = false;
        if (s[indexS] === t[indexT]) {
            res = res || fun(indexS + 1, indexT + 1)
        } else {
            res = res || fun(indexS, indexT + 1)
        }
        return res;
    }
    return fun(0,0)
};