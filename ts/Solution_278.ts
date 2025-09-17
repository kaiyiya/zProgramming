
var solution = function (isBadVersion: any) {
    return function (n: number): number {
        function getWrong(start: number, end: number): number {
            if (start >= end) return start
            let mid = Math.floor((start + end) / 2)
            let isBad = isBadVersion(mid)
            let res = mid;

            if (isBad) {
                res = getWrong(start, mid)
            } else {
                res = getWrong(mid + 1, end)
            }
            return res
        }
        return getWrong(0, n)
    };
};