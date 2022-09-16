export function greatestCommonDivisor(a: number, b: number): number {
    return b != 0 ? greatestCommonDivisor(b, a % b) : a;
}
