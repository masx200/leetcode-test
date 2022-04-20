export default function countBits(n: number): number[] {
    const bits: number[] = Array.from({ length: n + 1 });
    bits[0] = 0;
    for (let i = 1; i <= n; i++) {
        bits[i] = (i & 1) === 1 ? bits[i - 1] + 1 : bits[i >> 1];
    }
    return bits;
}
