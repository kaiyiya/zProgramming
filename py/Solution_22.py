def generate_parenthesis(n: int) -> list[str]:
    stack = [("", 0, n)]  # 初始状态：(当前字符串, 未闭合括号数, 剩余括号对数)
    result = []
    
    while stack:
        current, open_count, remaining = stack.pop()
        
        # 所有括号已生成
        if remaining == 0:
            result.append(current)
            continue
        
        # 添加右括号分支（先压栈后处理）
        if open_count > 0:
            stack.append((
                current + ")",
                open_count - 1,
                remaining - 1
            ))
        
        # 添加左括号分支（后压栈先处理）
        if open_count < remaining:
            stack.append((
                current + "(",
                open_count + 1,
                remaining
            ))
    
    return result

# 测试示例
if __name__ == "__main__":
    print(generate_parenthesis(3))
    # 输出：['((()))', '(()())', '(())()', '()(())', '()()()']（顺序可能因栈操作略有不同）