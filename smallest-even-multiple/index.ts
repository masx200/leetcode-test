export default function smallestEvenMultiple(n: number): number {
    return n & 1 ? 2 * n : n;
}
