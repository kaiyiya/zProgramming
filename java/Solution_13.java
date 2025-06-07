
import java.util.HashMap;

public class Solution_13 {
    public static void main(String[] args) {
        System.out.println(romanToInt("MCMXCIV"));
    }

    // public static int romanToInt(String s) {
    // HashMap<String, Integer> map = new HashMap<>(){{
    // put("IV",4); put("IX",9); put("XL",40); put("XC",90); put("CD",400);
    // put("CM",900);
    // put("I",1); put("V",5); put("X",10); put("L",50); put("C",100); put("D",500);
    // put("M",1000);
    // }};

    // int sum = 0;
    // for (int i = 0; i < s.length();) {
    // sum += (i < s.length()-1 && map.containsKey(s.substring(i,i+2)))
    // ? map.get(s.substring(i,i+=2))
    // : map.get(s.substring(i,i+=1));
    // }
    // return sum;
    // }
    public static int romanToInt(String s) {
        HashMap<String, Integer> map = new HashMap<>() {
            {
                put("IV", 4);
                put("IX", 9);
                put("XL", 40);
                put("XC", 90);
                put("CD", 400);
                put("CM", 900);
                put("I", 1);
                put("V", 5);
                put("X", 10);
                put("L", 50);
                put("C", 100);
                put("D", 500);
                put("M", 1000);
            }
        };
        // 递归终止条件
        if (s.isEmpty())
            return 0;

        // 优先检查双字符组合
        if (s.length() >= 2 && map.containsKey(s.substring(0, 2))) {
            return map.get(s.substring(0, 2)) + romanToInt(s.substring(2));
        }
        // 处理单字符
        return map.get(s.substring(0, 1)) + romanToInt(s.substring(1));

    }
}