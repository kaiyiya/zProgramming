function isPerfectSquare(num: number): boolean {
    function isP(start: number, end: number): number {
        if (start >= end) return start
        let mid = Math.floor((start + end) / 2)
        let res = mid;
        if (mid * mid > num) {
            res = isP(start, mid)
        } else if (mid * mid < num) {
            res = isP(mid + 1, end)
        }
        return res
    }

    let res = isP(0, num)
    return res * res === num

};
console.log(isPerfectSquare(2));
