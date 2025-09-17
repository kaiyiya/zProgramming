function isPowerOfThree(n: number): boolean {
    if (n === 1) return true
    else if(n===0)return false

    let res = n % 3 === 0;
    return isPowerOfThree(Math.floor(n / 3)) && res;
};