export default function consecutiveNumbersSum(n: number): number {
    const cached = cache.get(n);
    if (typeof cached === "number") return cached;

    let ans = 0;
    const n2 = n * 2;

    for (let i = 0; i * i < n2; i++) {
        if (n2 % i === 0) {
            if ((n2 / i - (i - 1)) % 2 === 0) {
                ans++;
            }
        }
    }
    cache.set(n, ans);
    return ans;
}
const cache = new Map<number, number>();
