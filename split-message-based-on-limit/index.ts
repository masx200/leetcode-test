export default function splitMessage(message: string, limit: number): string[] {
    const n = message.length;
    for (let i = 1, cap = 0, tail_len = 0;; ++i) {
        if (i < 10) tail_len = 5; // 结尾的长度
        else if (i < 100) {
            if (i == 10) cap -= 9; // 前面的结尾的长度都 +1，那么容量就要减小
            tail_len = 7;
        } else if (i < 1000) {
            if (i == 100) cap -= 99;
            tail_len = 9;
        } else {
            if (i == 1000) cap -= 999;
            tail_len = 11;
        }
        if (tail_len >= limit) return []; // cap 无法增大，寄
        cap += limit - tail_len;
        if (cap < n) continue; // 容量没有达到，继续枚举

        const ans = Array<string>(i).fill("");
        for (let j = 0, k = 0; j < i; ++j) {
            const tail = "<" + (j + 1) + "/" + i + ">";
            if (j == i - 1) ans[j] = message.substring(k) + tail;
            else {
                const m = limit - tail.length;
                ans[j] = message.substring(k, k + m) + tail;
                k += m;
            }
        }
        return ans;
    }
}
