    function findTheDifference(s: string, t: string): string {
        let map = new Map<string, number>()
        let newS = s + t
        function fun(index: number) {
            if (index >= newS.length) return;
            map.set(newS[index], map.get(newS[index]) === 1 ? 0 : 1)
            fun(index + 1)
        }

        fun(0)
        let flag = ''
        map.forEach((value, key) => {
            if (value === 1) flag = key
        })
        return flag
    };