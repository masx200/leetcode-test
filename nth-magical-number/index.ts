export default function nthMagicalNumber(
    n: number,
    a: number,
    b: number,
): number {
    const MOD = 1000000007;

    const c = lcm(a, b);
    const m = Math.floor(c / a) + Math.floor(c / b) - 1;
    const r = n % m;
    const res = (c * Math.floor(n / m)) % MOD;
    if (r === 0) {
        return res;
    }
    let addA = a,
        addB = b;
    for (let i = 0; i < r - 1; ++i) {
        if (addA < addB) {
            addA += a;
        } else {
            addB += b;
        }
    }
    return (res + (Math.min(addA, addB) % MOD)) % MOD;
}
export function lcm(a: number, b: number) {
    return Math.floor((a * b) / gcd(a, b));
}
export function gcd(a: number, b: number): number {
    return b !== 0 ? gcd(b, a % b) : a;
}
