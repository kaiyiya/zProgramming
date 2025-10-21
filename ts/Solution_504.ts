function convertToBase7(num: number): string {
    function get7(n: number): string {
        if (n <= 0) return '0'
        let cur = n % 7
        let res = get7(Math.floor(n / 7))
        return res + cur
    }
    return num > 0 ? (Number(get7(num)) + '') : ('-' + Number(get7(-num)))
};
console.log(convertToBase7(7))