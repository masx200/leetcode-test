export default function numberOfCuts(n: number): number {
    return n == 1 ? 0 : (n & 1) == 0 ? n >> 1 : n;
}
