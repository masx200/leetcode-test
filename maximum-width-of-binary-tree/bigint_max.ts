export function bigint_max(...bigs: bigint[]): bigint {
    return bigs.reduce((p, v) => p < v ? v : p, bigs[0]);
}
