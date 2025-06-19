function lengthOfLastWord(s: string): number {
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