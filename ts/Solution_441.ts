function arrangeCoins(n: number): number {

    function getN(remain: number, use: number): number {
        if (remain < use) return 0
        return getN(remain - use, use + 1) + 1

    }
    return getN(n, 1)
};