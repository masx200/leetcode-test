export default function grayCode(n: number): number[] {
    return Array.from({ length: 1 << n }, (_v, k) => k ^ (k >> 1));
}
