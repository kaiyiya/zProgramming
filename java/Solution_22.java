import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

class Solution_22 {
    public static void main(String[] args) {
        // 括号生成
        List<String> list = new LinkedList<>();
        fun(list, 0, 3, "");
        for (String a : list) {
            System.out.println(a);
        }
    }

    public static void fun(List<String> list, int open, int max, String res) {
        if (max == 0) {
            list.add(res);
            return;
        }
        if (open < max)
            fun(list, open + 1, max, res + "(");
        if (open > 0)
            fun(list, open - 1, max - 1, res + ")");
    }

    public static void fun1(List<String> list, int n) {
        // 使用栈存储状态：当前字符串、未闭合括号数、剩余括号对数
        Stack<Object[]> stack = new Stack<>();
        stack.push(new Object[] { "", 0, n }); // 初始状态

        while (!stack.isEmpty()) {
            Object[] state = stack.pop();
            String current = (String) state[0];
            int open = (int) state[1];
            int remaining = (int) state[2];

            // 所有括号已生成，添加到结果
            if (remaining == 0) {
                list.add(current);
                continue;
            }

            // 添加右括号分支（先压栈后处理）
            if (open > 0) {
                stack.push(new Object[] {
                        current + ")",
                        open - 1,
                        remaining - 1
                });
            }

            // 添加左括号分支（后压栈先处理）
            if (open < remaining) {
                stack.push(new Object[] {
                        current + "(",
                        open + 1,
                        remaining
                });
            }
        }
    }

}