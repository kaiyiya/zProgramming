function wordPattern(pattern: string, s: string): boolean {
    let mapA = new Map<string, string>()
    let mapB = new Map<string, string>()
    let flag = true;
    let A: string[] = pattern.split('');
    let B: string[] = s.split(" ")
    console.log(A);
    console.log(B);

    if (A.length !== B.length) return false;
    function fun(index: number) {
        if (index === A.length) return true
        if (!mapA.has(A[index])) mapA.set(A[index], B[index])
        else if (mapA.has(A[index])) {
            let res = mapA.get(A[index])
            if (res !== B[index]) {
                flag = false
                return
            }
        }
        if (!mapB.has(B[index])) mapB.set(B[index], A[index])
        else if (mapB.has(B[index])) {
            let res = mapB.get(B[index])
            if (res !== A[index]) {
                flag = false
                return
            }
        }
        fun(index + 1)
    }

    fun(0)
    return flag;
};
wordPattern("abba", "dog cat cat dog")