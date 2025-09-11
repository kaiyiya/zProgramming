function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const sMap = new Map<string, string>();
    const tMap = new Map<string, string>();

    function checkIndex(index: number): boolean {
        if (index === s.length) return true;
        const charS = s[index];
        const charT = t[index];

        // 检查 s 到 t 的映射
        if (sMap.has(charS)) {
            if (sMap.get(charS) !== charT) return false;
        } else {
            sMap.set(charS, charT);
        }

        // 检查 t 到 s 的映射
        if (tMap.has(charT)) {
            if (tMap.get(charT) !== charS) return false;
        } else {
            tMap.set(charT, charS);
        }

        return checkIndex(index + 1);
    }

    return checkIndex(0);
}