function fizzBuzz(n: number): string[] {
    let res: string[] = []
    function fun(index: number) {
        if (index >= n + 1) return;
        if (index % 3 === 0 && index % 5 === 0) {
            res[index - 1] = "FizzBuzz"
        } else if (index % 5 === 0) {
            res[index - 1] = "Buzz"
        } else if (index % 3 === 0) {
            res[index - 1] = "Fizz"
        } else {
            res[index - 1] = String(index)
        }

        fun(index + 1)
    }
    fun(1)
    return res
};