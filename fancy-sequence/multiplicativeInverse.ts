export function multiplicativeInverse(x: number, mod: bigint): bigint {
    if (typeof INVERSES[x] !== "undefined") {
        return INVERSES[x];
    }
    const xb = BigInt(x);
    const mb = BigInt(mod);
    let y = 1n,
        m = mb,
        p = xb;
    m = m - 2n;

    for (let i = 0n; 1n << i < m; i++, p = (p * p) % mb) {
        if (((m >> i) & 1n) == 1n) {
            y = (y * p) % mb;
        }
    }
    INVERSES[x] = y;
    return y;
}
const INVERSES: bigint[] = [];
