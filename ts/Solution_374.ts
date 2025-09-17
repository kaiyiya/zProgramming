/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {

    function fun(start: number, end: number) {
        if (start >= end) return end
        let mid = Math.floor((start + end) / 2)
        let res = mid;
        if (guess(mid) === -1) {
            res = fun(start, mid)
        } else if (guess(mid) === 1) {
            res = fun(mid + 1, end)
        }
        return res
    }

    function guess(num: number) {
        return -1;
    }
    return fun(0, n)
};