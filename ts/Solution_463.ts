function islandPerimeter(grid: number[][]): number {
    let res = 0;
    let visited = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(0));
    grid.forEach(item => item.forEach(innerItem => innerItem === 1 && (res += 4)));
    function fun(x: number, y: number) {//左上角到右下角
        if (isOver(x, y) || visited[x][y] === 1) return
        visited[x][y] = 1
        if (grid[x][y] !== 0) {
            if (!isOver(x - 1, y) && grid[x - 1][y] === 1) {
                res -= 2
            }
            if (!isOver(x, y - 1) && grid[x][y - 1] === 1) {
                res -= 2
            }
            if (!isOver(x + 1, y) && grid[x + 1][y] === 1) {
                res -= 2
            }
            if (!isOver(x, y + 1) && grid[x][y + 1] === 1) {
                res -= 2
            }
            grid[x][y] = 0
        }

        fun(x + 1, y)
        fun(x, y + 1)
    }


    // 判断某个元素是否越界
    function isOver(x: number, y: number): boolean {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length)
            return true
        return false
    }
    fun(0, 0)
    return res

};