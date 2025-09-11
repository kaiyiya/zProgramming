function maxProfit(prices: number[]): number {
    let map = new Array(prices.length)
    // 递归函数的作用是返回后面的值减去前面的值最大的那个
    function getMax(index: number) {
        if (index == 0) return 0;
        let nowNum = prices[index] - map[index]
        let res = getMax(index - 1);
        return Math.max(res, nowNum)
    }
    // 为了不超时,做一个map表,存储index:minValue 
    function getMinMap(map: number[], index: number) {
        if (index == 0) {
            map[0] = prices[0]
            return
        }
        getMinMap(map, index - 1)
        map[index] = Math.min(map[index - 1], prices[index])
    }
    getMinMap(map, prices.length - 1)
    return getMax(prices.length - 1)
};

console.log(maxProfit([1, 2, 3]));
console.log(maxProfit([3, 2, 1]));
