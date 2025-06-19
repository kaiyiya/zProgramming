public class Solution_58 {
    public static void main(String[] args) {
        System.out.println(lengthOfLastWord(" luffy is s j   "));
    }

    public static int lengthOfLastWord(String s) {
        int end = s.length() - 1;
        // 跳过末尾空格
        while (end >= 0 && s.charAt(end) == ' ')
            end--;

        int start = end;
        // 向前定位单词起始位置
        while (start >= 0 && s.charAt(start) != ' ')
            start--;

        return end - start;
    }

    public static int lengthOfLastWord1(String s) {
        return helper(s, s.length() - 1, false);
    }

    private static int helper(String s, int index, boolean counting) {
        if (index < 0) {
            return 0;
        }
        char c = s.charAt(index);
        if (c == ' ') {
            if (counting) {
                return 0; // 计数阶段遇到空格：终止计数
            } else {
                return helper(s, index - 1, false); // 跳过尾部空格
            }
        } else {
            return 1 + helper(s, index - 1, true); // 计数非空格字符
        }
    }
}
