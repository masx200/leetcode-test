// My code goes here
/**https://leetcode-cn.com/problems/fibonacci-number/ */
export default function fibonacci_Number(n: number | bigint): number | bigint {
    const result = fibonacci_bigint(BigInt(n));
    if (result < Number.MAX_SAFE_INTEGER) {
        return Number(result);
    } else {
        return result;
    }
}

export function fibonacci_bigint(num: bigint): bigint {
    if (num < 0) {
        throw Error("must grater than zero");
    }
    const bigInt = BigInt;
    const cached = feibonq.get(num);
    if (typeof cached !== "undefined") {
        return cached;
    }
    //   num = Math.floor(num);
    num = bigInt(num);
    for (let e = 0n; e <= num; e++) {
        if (feibonq.has(e)) {
            continue;
        } else {
            const r = feibonq.get(e) ||
                bigInt(feibonq.get(e - 1n) || fibonacci_bigint(e - 1n)) +
                    bigInt(feibonq.get(e - 2n) || fibonacci_bigint(e - 2n));
            feibonq.set(e, r);
        }
    }
    return fibonacci_bigint(num);
}
const feibonq = new Map<bigint, bigint>([
    [0n, 0n],
    [1n, 1n],
    [2n, 1n],
]);
//[bigInt(0), bigInt(1), bigInt(1)];
