export default function isPowerOfFour(n: number): boolean {
    return Number.isInteger(Math.log2(n) / Math.log2(4));
}
