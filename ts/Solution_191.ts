function hammingWeight(n: number): number {
    return n.toString(2).split('0').join('').length
};