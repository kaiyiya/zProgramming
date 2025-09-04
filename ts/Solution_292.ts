
function canWinNimDetailed(n: number, isPlayer1Turn: boolean = true): boolean {
    // 基础情况：没有石子剩余
    if (n <= 0) {
        // 如果没有石子，当前玩家已经输了（上一个玩家赢了）
        return !isPlayer1Turn;
    }

    // 基础情况：剩余石子数 <= 3，当前玩家可以直接取完获胜
    if (n <= 3) {
        return isPlayer1Turn;
    }

    // 递归情况：尝试取1、2或3个石子
    // 只要有一种取法能让当前玩家获胜，就返回true
    return canWinNimDetailed(n - 1, !isPlayer1Turn) === isPlayer1Turn ||
        canWinNimDetailed(n - 2, !isPlayer1Turn) === isPlayer1Turn ||
        canWinNimDetailed(n - 3, !isPlayer1Turn) === isPlayer1Turn;
}