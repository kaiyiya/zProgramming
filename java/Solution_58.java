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

    // public static int lengthOfLastWord1(String s) {

    // }

    public static void fun(char[] chas, int index, int start, int end) {
        if (chas[index] == ' ') {
            fun(chas, index - 1, start, end);
        }

    }
}
