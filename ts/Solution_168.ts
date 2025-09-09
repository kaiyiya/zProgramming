function convertToTitle(columnNumber: number): string {
    // 递归函数的作用是,返回转换之后的str
    function get26Index(num: number): string {
        if (num <= 0) return ""
        if (num % 26 === 0) {
            return get26Index(Math.floor((num - 1) / 26)) + 'Z';
        }
        return get26Index(Math.floor(num / 26)) + String.fromCharCode(num % 26 + 64);
    }
    return get26Index(columnNumber)

};
console.log(convertToTitle(27))