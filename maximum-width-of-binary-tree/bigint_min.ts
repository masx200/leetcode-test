export function bigint_min(...bigs: bigint[]): bigint {
    if (bigs.length === 0) {
        throw new Error("empty argument");
    }
    return bigs.reduce((p, v) => (p > v ? v : p), bigs[0]);
}
