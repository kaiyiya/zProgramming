function findPoisonedDuration(timeSeries: number[], duration: number): number {
    let res = 0
    function run(index: number) {
        if (index === 0) return
        run(index - 1)
        res += Math.min((timeSeries[index] - timeSeries[index - 1]), (duration))
    }
    run(timeSeries.length - 1)
    return res + duration
};
console.log(findPoisonedDuration([1, 4], 2));
