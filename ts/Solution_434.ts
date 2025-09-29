function countSegments(s: string): number {
    function getN(index: number): number {
        // 跳过开头的空格
        while (index < s.length && s[index] === ' ') {
            index++;
        }

        if (index >= s.length) return 0;

        let newIndex = index;
        // 找到单词结尾
        while (newIndex < s.length && s[newIndex] !== ' ') {
            newIndex++;
        }

        return getN(newIndex) + 1;
    }

    return getN(0);
}