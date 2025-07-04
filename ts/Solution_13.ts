function romanToInt(s: string): number {
    const romanMap: Record<string, number> = {
        IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900,
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };

    let sum = 0;
    for (let i = 0; i < s.length;) {
        const twoChar = s.substring(i, i + 2);
        if (romanMap[twoChar]) {
            sum += romanMap[twoChar];
            i += 2;
        } else {
            sum += romanMap[s[i]];
            i += 1;
        }
    }
    return sum;
}


console.log(romanToInt("MCMXCIV"));
