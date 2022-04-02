// My code goes here
/**https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/ */
export default function fei_bo_na_qi_shu_lie_lcof(n: number): number {
    return Number(getfbnq(BigInt(n)) % BigInt(1e9 + 7));
}

function getfbnq(num: bigint): bigint {
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
                bigInt(feibonq.get(e - 1n) || getfbnq(e - 1n)) +
                    bigInt(feibonq.get(e - 2n) || getfbnq(e - 2n));
            feibonq.set(e, r);
        }
    }
    return getfbnq(num);
}
const feibonq = new Map<bigint, bigint>([
    [0n, 0n],
    [1n, 1n],
    [2n, 1n],
]);
//[bigInt(0), bigInt(1), bigInt(1)];
