function isHappy(n: number): boolean {
    let map = new Map<number, number>()
    let flag = false;
    function getH(num: string) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]) ** 2
        }
        if (sum === 1) { flag = true; return }
        if (map.has(Number(sum))) { return; }
        map.set(sum, 1)
        getH(sum + '')
    }
    getH(n + '');
    return flag;
};
console.log(isHappy(101))