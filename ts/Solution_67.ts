function addBinary(a: string, b: string): string {


    // 将a和b对齐位数
    while (a.length > b.length) b = '0' + b
    while (a.length < b.length) a = '0' + a
    function add(index: number, c: number): string {
        if (index < 0) return c === 1 ? '1' : ''
        let nowNum = 0, nextC = 0;
        if (a[index] == '1' && b[index] == '1') {
            if (c == 1) nowNum = 1;
            nextC = 1;
        } else if (a[index] == '0' && b[index] == '0') {
            if (c == 1) nowNum = 1;
        } else {
            nowNum = 1;
            if (c == 1) {
                nowNum = 0;
                nextC = 1;
            }
        }

        return add(index - 1, nextC) + nowNum;

    }
    return add(a.length - 1, 0)
};

console.log(addBinary("1001", "101"))
