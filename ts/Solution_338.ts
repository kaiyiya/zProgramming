function countBits(n: number): number[] {
    // 递归函数：计算一个数二进制表示中1的个数
    function countOnes(num: number): number {
        // 基础情况：num为0时，二进制中1的个数为0
        if (num === 0) return 0;
        // 递归情况：num & (num-1) 会消除num二进制中最右边的1
        // 所以当前数的1个数 = 去掉最右边1后的数的1个数 + 1
        return countOnes(num & (num - 1)) + 1;
    }
    
    // 构建结果数组，对0到n每个数计算其二进制中1的个数
    const result: number[] = [];
    for (let i = 0; i <= n; i++) {
        result.push(countOnes(i));
    }
    
    return result;
}

// 测试
console.log(countBits(10)); // [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]