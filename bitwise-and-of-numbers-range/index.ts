export default function rangeBitwiseAnd(m: number, n: number): number {
    while (m < n) {
        // 抹去最右边的 1
        n = n & (n - 1);
    }
    return n;
}
