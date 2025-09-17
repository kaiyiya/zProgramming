function canConstruct(ransomNote: string, magazine: string): boolean {
    let map = new Map<string, number>()
    for (let i = 0; i < ransomNote.length; i++) {
        if (!map.has(ransomNote[i])) {
            map.set(ransomNote[i], 1)
        } else {
            let res = map.get(ransomNote[i])!
            map.set(ransomNote[i], res + 1)
        }

    }
    for (let i = 0; i < magazine.length; i++) {
        if (!map.has(magazine[i])) {
            map.set(magazine[i], -1)
        } else {
            let res = map.get(magazine[i])!
            map.set(magazine[i], res - 1)
        }
    }

    for (let i of map) {
        if (i[1] > 0)
            return false
    }

    return true
};