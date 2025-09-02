function canWinNim(n: number): boolean {
    
    function canWin(num: number) {
        if (num <= 3) return true;
        return !canWin(num - 1) || !canWin(num - 2)
            || !canWin(num - 3)
    }
    return canWin(n)


}