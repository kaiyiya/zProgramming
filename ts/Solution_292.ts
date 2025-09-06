function canWinNim(n: number): boolean {
    const map = new Map<number, boolean>()

    function win(num: number): boolean {
        // 基础情况：没有石头剩余，当前玩家失败
        if (num <= 0) return false;
        // 基础情况：1-3个石头，当前玩家可以直接取完获胜
        if (num <= 3) return true;

        if (map.has(num)) return map.get(num)!

        // 递归检查：如果对手在任何一种取法下都可能输，则当前玩家赢
        let res1 = win(num - 1)
        let res2 = win(num - 2)
        let res3 = win(num - 3)

        const result = !res1 || !res2 || !res3
        map.set(num, result)
        return result
    }

    return win(n)
}
// 转换为DP版本
function canWinNimDP(n: number): boolean {
    // 特殊情况处理
    if (n <= 0) return false;
    if (n <= 3) return true;

    // 1. 创建DP数组
    const dp: boolean[] = new Array(n + 1);

    // 2. 初始化基础状态
    dp[0] = false;
    dp[1] = true;
    dp[2] = true;
    dp[3] = true;

    // 3. 自底向上计算（按照依赖顺序）
    for (let i = 4; i <= n; i++) {
        // 4. 应用状态转移方程
        dp[i] = !dp[i - 1] || !dp[i - 2] || !dp[i - 3];
    }

    // 5. 返回目标状态
    return dp[n];
}

// 空间优化版本
function canWinNimOptimized(n: number): boolean {
    if (n <= 0) return false;
    if (n <= 3) return true;

    // 只保存最近的4个状态
    let dp0 = false, dp1 = true, dp2 = true, dp3 = true;

    for (let i = 4; i <= n; i++) {
        const current = !dp1 || !dp2 || !dp3;
        // 滚动更新
        dp0 = dp1;
        dp1 = dp2;
        dp2 = dp3;
        dp3 = current;
    }

    return dp3;
}