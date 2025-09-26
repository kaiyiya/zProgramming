function addStrings(num1: string, num2: string): string {
    if (num1.length < num2.length) {
        num1 = '0'.repeat(num2.length - num1.length) + num1
    } else if (num2.length < num1.length) {
        num2 = '0'.repeat(num1.length - num2.length) + num2
    }
    function add(index: number, flag: number): string {
        if (index === -1) {
            return flag === 0 ? '' : '1'
        }
        if (Number(num1[index]) + Number(num2[index]) + flag >= 10) {
            let cur = (Number(num1[index]) + Number(num2[index]) + flag) % 10
            return add(index - 1, 1) + cur
        }
        return add(index - 1, 0) + (Number(num1[index]) + Number(num2[index]) + flag)
    }
    return add(num1.length - 1, 0)

};
console.log(addStrings("11", "123"))