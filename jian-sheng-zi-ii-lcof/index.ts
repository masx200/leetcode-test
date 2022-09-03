function cuttingRope(n: number): number {
    return Number(integerBreak(BigInt(n)) % BigInt(1e9 + 7));
}
function integerBreak(n: bigint): bigint {
    if (n <= 3) return n - 1n;
    if (n % 3n === 0n) {
        return 3n ** (n / 3n);
    }
    if (n % 3n === 2n) {
        return 3n ** (n / 3n) * 2n;
    }
    if (n % 3n === 1n) {
        return 3n ** (n / 3n - 1n) * 2n * 2n;
    }
    return n;
}
export default cuttingRope;
