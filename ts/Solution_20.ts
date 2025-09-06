function isValid(s: string): boolean {
    let y = {
        '}': '{',
        ']': '[',
        ')': '('
    }


    let stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            stack.push(s[i])
        } else {
            let now = stack.pop()
            if (now !== y[s[i]])
                return false;
        }
    }
    if (stack.length == 0)
        return true;
    return false;
};
console.log(isValid("({[]]})"));
