function addDigits(num: number): number {
    function addDG(sum: number): number {
        let numArr: number[] = ((sum + '').split('').map(n => Number(n)))
        let res: number = numArr.reduce((a, b) => a + b)
        if (res.toString().length == 1) return res;
        return addDG(res)
    }
    return addDG(num)
};


const res = addDigits(145)
console.log(res);
