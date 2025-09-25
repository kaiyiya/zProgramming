function readBinaryWatch(turnedOn: number): string[] {
    const arrHour = [1, 2, 4, 8];           // 小时位权重
    const arrMin = [1, 2, 4, 8, 16, 32];    // 分钟位权重
    const result: string[] = [];            // 存储结果

    // 回溯函数：尝试所有可能的LED点亮组合
    function backtrack(hourIndex: number, minuteIndex: number, hours: number, minutes: number, ledsLeft: number): void {
        // 如果时间不合法，剪枝
        if (hours > 11 || minutes > 59) return;

        // 如果已经用完所有LED，收集当前时间
        if (ledsLeft === 0) {
            result.push(`${hours}:${minutes < 10 ? '0' + minutes : minutes}`);
            return;
        }

        // 尝试点亮小时位的LED
        for (let i = hourIndex; i < arrHour.length; i++) {
            backtrack(i + 1, minuteIndex, hours + arrHour[i], minutes, ledsLeft - 1);
        }

        // 尝试点亮分钟位的LED
        for (let i = minuteIndex; i < arrMin.length; i++) {
            backtrack(arrHour.length, i + 1, hours, minutes + arrMin[i], ledsLeft - 1);
        }
    }

    backtrack(0, 0, 0, 0, turnedOn);
    return Array.from(new Set(result)); // 去重并返回结果
}

console.log(readBinaryWatch(2));