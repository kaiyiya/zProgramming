import java.util.HashMap;

class Solution_70 {

    public static void main(String[] args) {
        int[] min = new int[] { 0 };
        HashMap<Integer, Integer> m = new HashMap<>();
        fun(0, 3, min, m);
        System.out.println(min[0]);
    }

    public static void fun(int step, int max, int min[], HashMap<Integer, Integer> m) {
        if (step == max) {
            min[0]++;
            return;
        }
        if (step > max) {
            return;
        }

        // 检查缓存中是否存在当前步数的结果
        if (m.containsKey(step)) {
            min[0] += m.get(step); // 直接使用缓存结果
            return;
        }

        int prevMin = min[0]; // 记录当前路径数

        // 递归计算
        fun(step + 1, max, min, m);
        fun(step + 2, max, min, m);

        // 缓存新结果：当前步数新增的路径数 = 当前总路径数 - 递归前的路径数
        int newPaths = min[0] - prevMin;
        m.put(step, newPaths);
    }
}