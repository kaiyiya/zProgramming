function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    // 使用栈存储状态：当前字符串、未闭合括号数、剩余括号对数
    const stack: [string, number, number][] = [];
    stack.push(["", 0, n]); // 初始状态

    while (stack.length > 0) {
        // 弹出栈顶状态
        const [current, open, remaining] = stack.pop()!;

        // 所有括号已生成，添加到结果
        if (remaining === 0) {
            result.push(current);
            continue;
        }

        // 添加右括号分支（先压栈后处理）
        if (open > 0) {
            stack.push([
                current + ")",
                open - 1,
                remaining - 1
            ]);
        }

        // 添加左括号分支（后压栈先处理）
        if (open < remaining) {
            stack.push([
                current + "(",
                open + 1,
                remaining
            ]);
        }
    }

    return result;
}