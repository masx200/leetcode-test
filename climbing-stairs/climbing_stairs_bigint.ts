export function climbing_stairs_bigint(num: bigint): bigint {
    if (num === 0n) return 1n;
    if (num < 1) {
        throw Error("must grater than one");
    }
    const bigInt = BigInt;
    const cached = cacheClimbStairs.get(num);
    if (typeof cached !== "undefined") {
        return cached;
    }
    num = bigInt(num);
    for (let e = 1n; e <= num; e++) {
        if (cacheClimbStairs.has(e)) {
            continue;
        } else {
            const r = cacheClimbStairs.get(e) ||
                bigInt(
                        cacheClimbStairs.get(e - 1n) ||
                            climbing_stairs_bigint(e - 1n),
                    ) +
                    bigInt(
                        cacheClimbStairs.get(e - 2n) ||
                            climbing_stairs_bigint(e - 2n),
                    );
            cacheClimbStairs.set(e, r);
        }
    }
    return climbing_stairs_bigint(num);
}
const cacheClimbStairs = new Map<bigint, bigint>([
    [1n, 1n],
    [2n, 2n],
]);
