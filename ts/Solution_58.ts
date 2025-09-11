function lengthOfLastWord1(s: string): number {
    let end = s.length - 1;
    while (end >= 0 && s.charAt(end) == ' ') {
        end--;
    }
    let start = end;
    while (start >= 0 && s.charAt(start) != ' ') {
        start--;
    }
    return end - start;
};

function lengthOfLastWord(s: string): number {
    if (s.length == 0) return 0;
    // 作用是返回最后一个单词的长度
    function getNum(index: number, res: number) {
        if (index > s.length - 1) return res;

        if (s[index] != ' ') {
            res++;
        } else {
            
            res = 0;
        }
        return getNum(index + 1, res);
    }

    return getNum(0, 0);
};
console.log(lengthOfLastWord("hellos world"));
