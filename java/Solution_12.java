import java.util.HashMap;

public class Solution_12 {
    public static void main(String[] args) {
        System.out.println(intToRoman(58));
    }

    // 获取组合
    public static String fun(int num, HashMap<Integer, String> map) {
        String res = "";
        // 将一个数字拆分成罗马字符的组合
        if (num >= 1000) {
            // 四位数
            int s = num / 1000;
            while (s-- != 0) {
                res += map.get(1000);
            }
        } else if (num >= 100) {
            // 三位数 只有100 100 100 400 400 500 900组合
            int[] arr = new int[] { 900, 500, 400, 400, 100, 100, 100 };
            return dg(arr, 0, num, map);
        } else if (num >= 10) {
            // 两位数
            int[] arr = new int[] { 90, 50, 40, 40, 10, 10, 10 };
            return dg(arr, 0, num, map);
        } else {
            // 一位数
            int[] arr = new int[] { 9, 5, 4, 4, 1, 1, 1 };
            return dg(arr, 0, num, map);
        }
        return res;
    }

    public static String dg(int[] arr, int index, int aim, HashMap<Integer, String> map) {
        String res = "";
        if (index >= arr.length) {
            return "";
        }
        if (aim == 0) {
            return "";
        } else if (aim >= arr[index]) {
            // 如果可以减
            res += map.get(arr[index]);
            res += dg(arr, index + 1, aim - arr[index], map);
        } else {
            res += dg(arr, index + 1, aim, map);
        }

        return res;

    }

    public static String intToRoman(int num) {
        HashMap<Integer, String> map = new HashMap<>() {
            {
                put(4, "IV");
                put(9, "IX");
                put(40, "XL");
                put(90, "XC");
                put(400, "CD");
                put(900, "CM");
                put(1, "I");
                put(5, "V");
                put(10, "X");
                put(50, "L");
                put(100, "C");
                put(500, "D");
                put(1000, "M");
            }
        };
        // 分离各个位数
        char[] chas = String.valueOf(num).toCharArray();
        String res = "";
        for (int i = chas.length - 1; i >= 0; i--) {
            // 比如234
            int n = (int) (Integer.valueOf(chas[chas.length - i - 1]) * Math.pow(10, i));

            res += fun(n, map);
        }
        return res;
    }

}
