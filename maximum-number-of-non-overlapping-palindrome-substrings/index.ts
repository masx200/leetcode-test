export default function maxPalindromes(s: string, k: number): number {
    const n = s.length;
    const f: number[] = Array(n + 1).fill(0);
    for (let i = 0; i < 2 * n - 1; ++i) {
        let l = Math.floor(i / 2),
            r = l + (i % 2); // 中心扩展法
        f[l + 1] = Math.max(f[l + 1], f[l]);
        for (; l >= 0 && r < n && s[l] == s[r]; --l, ++r) {
            if (r - l + 1 >= k) f[r + 1] = Math.max(f[r + 1], f[l] + 1);
        }
    }
    return f[n];
}
