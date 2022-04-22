export function bigint_min(...bigs: bigint[]): bigint {
    return bigs.reduce((p, v) => p > v ? v : p, bigs[0]);
}
