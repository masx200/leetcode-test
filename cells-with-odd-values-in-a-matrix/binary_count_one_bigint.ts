export function binaryCountOneBigint(n: bigint) {
    let ans = 0n;
    while (n !== 0n) {
        if (n % 2n) {
            ans++;
        }
        n >>= 1n;
    }
    return ans;
}
