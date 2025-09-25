function toHex(num: number): string {
    let map = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ]
    function to(curNum: number): string {
        if (curNum === 0) return ''
        let cur = curNum % 16
        return to(Math.floor(curNum / 16)) + map[cur]
    }
    if (num < 0) {
        return to(num >>>= 0)
    } else if (num === 0) { return '0' } else return to(num)
};
console.log(toHex(-(2 ** 31)));
