export default function trailingZeroes(n: number): number {
    return n ? Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5)) : 0;
}
