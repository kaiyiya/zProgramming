function hammingDistance(x: number, y: number): number {
    let res = 0
    function fun(a: number, b: number) {
        if (a === 0 && b === 0) return
        let dA = a & 1
        let dB = b & 1
        if (dA !== dB) res++
        fun(a >> 1, b >> 1)
    }
    fun(x, y)
    return res
};