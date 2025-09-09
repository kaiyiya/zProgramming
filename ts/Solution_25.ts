function isPalindrome(s: string): boolean {

    // 当前的函数是判断左右两边是否对称
    function isP(left: number, right: number, str: string): boolean {
        if (left >= right) return true
        let res = isP(left + 1, right - 1, str)
        return res && str[left] === str[right]
    }
    let r = s.toLowerCase().replace(/[^a-z]/g, '')
    return isP(0, r.length - 1, r)
};
console.log(isPalindrome("0P"));
