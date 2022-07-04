function waysToStep(n: number): number {
    return Number(waysToStep_bigint_mod(BigInt(n), 1000000007n));
}

function waysToStep_bigint_mod(n: bigint, mod: bigint): bigint {
    const cached = cache.get(n);
    if (cache.has(n) && typeof cached !== "undefined") {
        return cached;
    }
    for (let i = 0n; i <= n; i++) {
        if (!cache.has(i)) {
            const result =
                ((cache.get(i - 1n) ?? waysToStep_bigint_mod(i - 1n, mod)) +
                    (cache.get(i - 2n) ?? waysToStep_bigint_mod(i - 2n, mod)) +
                    (cache.get(i - 3n) ?? waysToStep_bigint_mod(i - 3n, mod))) %
                mod;
            cache.set(i, result);
        }
    }
    return waysToStep_bigint_mod(n, mod);
}

const cache = new Map<bigint, bigint>([
    [0n, 0n],
    [1n, 1n],
    [2n, 2n],
    [3n, 4n],
]);
export default waysToStep;
