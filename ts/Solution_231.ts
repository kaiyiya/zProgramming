function isPowerOfTwo(n: number): boolean {
    function isP(num: number) {
        if (num === 1) return true
        if(num<1)return false
        let res = num % 2 === 0
        return res && isP(num / 2)
    }
    return isP(n)
};