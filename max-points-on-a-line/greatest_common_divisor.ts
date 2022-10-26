export function gcd(a: number, b: number): number {
    return b != 0 ? gcd(b, a % b) : a;
}
