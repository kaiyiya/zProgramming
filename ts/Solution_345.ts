function reverseVowels(s: string): string {
    let sArr = s.split('')
    function rev(start: number, end: number) {
        if (start >= end) return
        let stepStart = 0
        let stepEnd = 0
        if (isY(s[start]) && isY(s[end])) {
            let tmp: string = sArr[start]
            sArr[start] = sArr[end]
            sArr[end] = tmp
            stepStart = 1
            stepEnd = 1
        }

        while (start + stepStart <= end && !isY(s[start + stepStart])) {
            stepStart++
        }
        while (end - stepEnd >= start && !isY(s[end - stepEnd])) {
            stepEnd++
        }

        rev(start + stepStart, end - stepEnd)

    }

    function isY(char: string) {
        return !!['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'].includes(char)
    }


    rev(0, s.length - 1)
    return sArr.join('');
};