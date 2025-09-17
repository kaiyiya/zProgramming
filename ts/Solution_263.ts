function isUgly(n: number): boolean {
    function isU(num: number): boolean {
        if (num <=1) return true;
        let res = false;
        if (num % 2 === 0) {
            res = res || isU(Math.floor(num / 2))
        }
        if (num % 3 === 0) {
            res = res || isU(Math.floor(num / 3))
        }
        if (num % 5 === 0) {
            res = res || isU(Math.floor(num / 5))
        }
        return res;
    }
    return isU(n)

};
// console.log(isUgly(14))
console.log(Math.floor(0/1));
