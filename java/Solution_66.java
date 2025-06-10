public class Solution_66 {
    public static void main(String[] args) {
        int[] l = (plusOne(new int[] { 9, 9 }));
        int[] s = plusOneRecuresive(new int[] { 9, 9 }, 1, 1);
        for (int i : s) {
            System.out.println(i);
        }

    }

    public static int[] plusOne(int[] digits) {
        for (int i = digits.length - 1; i >= 0; i--) {
            if (digits[i] == 9) {
                digits[i] = 0;
            } else {
                digits[i]++;
                return digits;
            }
        }
        // 处理全为9的特殊情况
        int[] newDigits = new int[digits.length + 1];
        newDigits[0] = 1;
        return newDigits;
    }

    // 递归写法
    public static int[] plusOneRecuresive(int[] digits, int index, int ca) {
        if (index < 0)
            return digits;
        if (ca == 0) {
            return digits;
        } else {
            if (digits[index] == 9) {
                digits[index] = 0;
                ca = 1;
            } else {
                digits[index] += 1;
                ca = 0;
            }
        }
        int[] res = plusOneRecuresive(digits, index - 1, ca);
        if (res[0] == 0 && ca == 1) {
            int[] newRes = new int[digits.length + 1];
            newRes[0] = 1;
            for (int i = 0; i < digits.length; i++) {
                newRes[i + 1] = digits[i];
            }
            return newRes;
        }
        return res;
    }
}
