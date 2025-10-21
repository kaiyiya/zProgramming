function solveNQueens(n: number): string[][] {
    let map = new Array(n).fill(new Array(n).fill('.'))

    function isGood(x: number, y: number) {
        // 整行
        for (let i = 0; i < n; i++) {
            if (i === x) continue
            if (map[i][y] === 'Q') return false
        }
        // 整列
        for (let i = 0; i < n; i++) {
            if (i === y) continue
            if (map[x][i] === 'Q') return false
        }
        // 当前位置的对角线
        for (let i = x, j = y; i >= 0 && j >= 0; i--, j--){
            
        }



        return true
    }
};