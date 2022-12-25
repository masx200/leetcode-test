function maximumTastiness(price: number[], k: number): number {
    price.sort((a, b) => a - b);
    const n = price.length;
    let l = 0,
        r = price[n - 1];
    while (l < r) {
        const m = (l + r + 1) >> 1;
        let cur = 1,
            last = price[0];
        for (let i = 1; i < n; i++) {
            if (price[i] - last >= m) {
                cur++;
                last = price[i];
            }
        }
        if (cur < k) r = m - 1; // 当前符合条件的个数小，所以要减小m的值
        else l = m;
    }
    return l;
}
export default maximumTastiness;
