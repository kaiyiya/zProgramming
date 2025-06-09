import java.util.HashMap;

public class Solution_12 {
    public static void main(String[] args) {
        // System.out.println(intToRoman(1994));
    }

    // // 获取组合
    // public static String fun(int num, HashMap<Integer, String> map) {
    // StringBuffer res = new StringBuffer();
    // // 将一个数字拆分成罗马字符的组合
    // if (num >= 1000) {
    // // 四位数
    // int s = num / 1000;
    // while (s-- != 0) {
    // // res += map.get(1000);
    // res.append(map.get(1000));
    // }
    // } else if (num >= 100) {
    // // 三位数 只有100 100 100 400 400 500 900组合
    // int[] arr = new int[] { 900, 500, 400, 400, 100, 100, 100 };
    // dg(arr, 0, num, res, map);
    // } else if (num >= 10) {
    // // 两位数
    // int[] arr = new int[] { 90, 50, 40, 40, 10, 10, 10 };
    // dg(arr, 0, num, res, map);
    // } else {
    // // 一位数
    // int[] arr = new int[] { 9, 5, 4, 4, 1, 1, 1 };
    // dg(arr, 0, num, res, map);
    // }
    // return res.toString();
    // }

    // public static void dg(int[] arr, int index, int aim, StringBuffer res,
    // HashMap<Integer, String> map) {
    // if (aim == 0 || index >= arr.length) {
    // return;
    // } else if (aim >= arr[index]) {
    // // 如果可以减
    // // res += map.get(arr[index]);
    // res.append(map.get(arr[index]));
    // // System.out.println(res);
    // dg(arr, index + 1, aim - arr[index], res, map);
    // } else {
    // dg(arr, index + 1, aim, res, map);
    // }
    // }

    // public static String intToRoman(int num) {
    // HashMap<Integer, String> map = new HashMap<>() {
    // {
    // put(4, "IV");
    // put(9, "IX");
    // put(40, "XL");
    // put(90, "XC");
    // put(400, "CD");
    // put(900, "CM");
    // put(1, "I");
    // put(5, "V");
    // put(10, "X");
    // put(50, "L");
    // put(100, "C");
    // put(500, "D");
    // put(1000, "M");
    // }
    // };
    // // 分离各个位数
    // char[] chas = String.valueOf(num).toCharArray();
    // String res = "";
    // for (int i = chas.length - 1; i >= 0; i--) {
    // int n = (int) (Integer.valueOf(chas[chas.length - i - 1] + "") * Math.pow(10,
    // i));
    // res += fun(n, map);
    // }
    // return res;
    // }
    // 最优解非递归
    public String intToRoman(int num) {
        int[] values = { 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };
        String[] symbols = { "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < values.length && num > 0; i++) {
            while (num >= values[i]) {
                num -= values[i];
                sb.append(symbols[i]);
            }
        }
        return sb.toString();
    }
}
