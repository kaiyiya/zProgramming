function generate(numRows: number): number[][] {
    // 初始化杨辉三角，每行用1填充
    let map: number[][] = new Array(numRows).fill(null).map((item, index) => new Array(index + 1).fill(1));
    
    function gen(x: number, y: number) {
        // 基础情况：超出边界时返回
        if (x < 0 || y < 0) {
            return;
        }
        
        // 递归处理前面的元素
        if (y > 0) {
            gen(x, y - 1);
        } else if (x > 0) {
            gen(x - 1, x - 1);
        }
        
        // 只有非边界元素（不等于1的元素）才需要计算
        if (y > 0 && y < map[x].length - 1) {
            map[x][y] = getVal(x - 1, y - 1) + getVal(x - 1, y);
        }
    }
    
    // 获取某个值，处理边界情况
    function getVal(x: number, y: number): number {
        // 检查边界条件
        if (x < 0 || y < 0 || x >= map.length || y >= map[x].length) {
            return 0;
        }
        return map[x][y];
    }
    
    // 从第一行开始生成
    if (numRows > 0) {
        gen(numRows - 1, numRows - 1);
    }
    
    return map;
}

console.log(generate(5));