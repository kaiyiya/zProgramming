function licenseKeyFormatting(s: string, k: number): string {
    let str = s.toUpperCase().split('-').join('')
    let res = ''
    function fun(index: number) {
        if (index < 0) return;
        if (index - k < 0) {
            if (index === 0) res = res.slice(1, res.length)
            else res = str.slice(0, index) + res
            return;
        }
        res = "-" + str.slice(index - k, index) + res
        fun(index - k)
    }
    fun(str.length)
    return res
};