export default function printNumbers(n: number): number[] {
    return Array.from({ length: Math.pow(10, n) - 1 }).map((_, i) => i + 1);
}
