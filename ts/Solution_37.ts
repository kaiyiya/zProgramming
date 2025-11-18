/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    // 当前填入的数字可以解决当前状态的问题
    function solve(): boolean {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    // 如果还没有填写当前的数字,那么填入的会正确吗
                    for (let m = 1; m <= 9; m++) {
                        if (isGood(i, j, m + '')) {
                            // 如果可以填写
                            board[i][j] = m + ''
                            let res = solve()
                            if (res)
                                return true
                            else
                                board[i][j] = '.'
                        }
                    }
                    return false
                }
            }
        }
        return true
    }

    function isGood(x: number, y: number, num: string): boolean {
        if (x < 0 || y < 0 || x > board.length || y > board[0].length)
            return false
        // 查看行
        for (let i = 0; i < 9; i++) {
            if (i === x) continue
            if (board[i][y] === num) return false
        }
        // 查看列
        for (let i = 0; i < 9; i++) {
            if (i === y) continue
            if (board[x][i] === num) return false
        }
        // 查看九宫格
        const startX = Math.floor(x / 3) * 3;
        const startY = Math.floor(y / 3) * 3;

        for (let i = startX; i < startX + 3; i++) {
            for (let j = startY; j < startY + 3; j++) {
                if (i === x && j === y) continue;
                if (board[i][j] === num) return false;
            }
        }

        return true


    }
    solve()
};