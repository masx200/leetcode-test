export function greatest_common_divisor(a: number, b: number): number {
    return b != 0 ? greatest_common_divisor(b, a % b) : a;
}
