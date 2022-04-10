// My code goes here
/** https://leetcode-cn.com/problems/climbing-stairs */
export default function climbing_stairs(n: number | bigint): number | bigint {
    const result = climbing_stairs_bigint(BigInt(n));
    if (result < Number.MAX_SAFE_INTEGER) {
        return Number(result);
    } else {
        return result;
    }
}

export function climbing_stairs_bigint(num: bigint): bigint {
    if (num < 1) {
        throw Error("must grater than one");
    }
    const bigInt = BigInt;
    const cached = cacheClimbStairs.get(num);
    if (typeof cached !== "undefined") {
        return cached;
    }
    //   num = Math.floor(num);
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
