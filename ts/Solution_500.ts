function findWords(words: string[]): string[] {
    const str1 = "qwertyuiop"
    const str2 = "asdfghjkl"
    const str3 = "zxcvbnm"
    let map: string[] = []
    function fun(index: number) {
        if (index >= words.length) return
        fun(index + 1)
        check(words[index])
    }
    function check(str: string) {
        let m = str.split('')
        let index = 0
        while (index < m.length) {
            if (str1.includes(m[index].toLowerCase())) {
                while (index < m.length) {
                    if (str1.includes(m[index].toLowerCase()))
                        index++
                    else return
                }
            } else if (str2.includes(m[index].toLowerCase())) {
                while (index < m.length) {
                    if (str2.includes(m[index].toLowerCase()))
                        index++
                    else return
                }
            } else if (str3.includes(m[index].toLowerCase())) {
                while (index < m.length) {
                    if (str3.includes(m[index].toLowerCase()))
                        index++
                    else return
                }
            } else {
                break
            }
        }
        if (index === m.length)
            map.push(str)
    }
    fun(0)
    return map
};