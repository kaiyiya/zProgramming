package main

import "fmt"

func romanToInt(s string) int {
    romanMap := map[string]int{
        "IV": 4, "IX": 9, "XL": 40, "XC": 90, "CD": 400, "CM": 900,
        "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000,
    }

    sum := 0
    for i := 0; i < len(s); {
        if i+1 < len(s) {
            // 尝试匹配双字符组合
            if val, exists := romanMap[s[i:i+2]]; exists {
                sum += val
                i += 2
                continue
            }
        }
        // 处理单字符
        sum += romanMap[string(s[i])]
        i++
    }
    return sum
}

func main() {
    fmt.Println(romanToInt("MCMXCIV")) // 输出 1994
}