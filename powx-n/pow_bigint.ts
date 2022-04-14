export function pow_bigint(x: bigint, n: bigint): bigint {
    if (n < 0) {
        throw Error("result not bigint:" + x + "," + n);
    }
    const result = n === 1n
        ? x
        : x < 0
        ? (n % 2n === 0n ? 1n : -1n) * pow_bigint(-x, n)
        : x === 1n
        ? 1n
        : x === 0n
        ? 0n
        : n === 0n
        ? 1n
        : n % 2n
        ? x * pow_bigint(x, n - 1n)
        : pow_bigint(x * x, n / 2n);
    return result;
}
