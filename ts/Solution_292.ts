function canWinNim(n: number): boolean {
    function canyouWin(num:number):number {
        for (let i = 1; i <= Math.min(num, 3); i++) {
            let left = canyouWin(num - i);
            if (left == 0) {
                
            }
        }
    }
};

