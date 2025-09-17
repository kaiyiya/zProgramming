function reverseString(s: string[]): void {
    function rotate(start: number, end: number) {
        if (start >= end) return
        let tmp = s[start]
        s[start] = s[end]
        s[end] = tmp
        rotate(start + 1, end - 1)
    }
    rotate(0, s.length - 1)

};