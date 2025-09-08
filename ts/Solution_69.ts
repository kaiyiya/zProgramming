function mySqrt(x: number): number {
    // 采用二分查找递归的方式寻找最逼近x的
    function binSearch(start: number, end: number): number {
        if (start >= end)
            return end;
        let mid = Math.floor((start + end) / 2);
        let res = mid
        if (mid * mid > x) {
            res = binSearch(start, mid);
        } else if (mid * mid < x) {
            res = binSearch(mid + 1, end);
        } else return mid;
        return res;
    }
    let res = binSearch(0, x)
    return res * res > x ? res - 1 : res
};
console.log(mySqrt(145))