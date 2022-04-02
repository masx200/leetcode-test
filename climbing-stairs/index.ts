// My code goes here
/** https://leetcode-cn.com/problems/climbing-stairs */
export default function climbStairs(n: number): number {
    return Number(getClimbStairs(BigInt(n)));
}

function getClimbStairs(num: bigint): bigint {
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
            const r =
                cacheClimbStairs.get(e) ||
                bigInt(cacheClimbStairs.get(e - 1n) || getClimbStairs(e - 1n)) +
                    bigInt(
                        cacheClimbStairs.get(e - 2n) || getClimbStairs(e - 2n)
                    );
            cacheClimbStairs.set(e, r);
        }
    }
    return getClimbStairs(num);
}
const cacheClimbStairs = new Map<bigint, bigint>([
    [1n, 1n],
    [2n, 2n],
]);
