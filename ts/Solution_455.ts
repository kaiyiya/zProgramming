function findContentChildren(g: number[], s: number[]): number {
    // 对孩子胃口和饼干尺寸进行排序
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    let childIndex = 0;  // 孩子指针
    let cookieIndex = 0; // 饼干指针
    let result = 0;      // 满足的孩子数
    
    // 贪心策略：用最小的饼干满足最小胃口的孩子
    while (childIndex < g.length && cookieIndex < s.length) {
        // 如果当前饼干能满足当前孩子
        if (s[cookieIndex] >= g[childIndex]) {
            result++;
            childIndex++;  // 移动到下一个孩子
        }
        cookieIndex++;     // 移动到下一块饼干
    }
    
    return result;
}