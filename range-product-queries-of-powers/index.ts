export default function productQueries(
    n: number,
    queries: number[][],
): number[] {
    const powers = [1n];
    const mod = BigInt(1e9 + 7);
    while (n > 0) {
        const lowbit = n & -n;
        powers.push((powers[powers.length - 1] * BigInt(lowbit)) % mod);
        n -= lowbit;
    }

    return queries.map(([left, right]) => {
        // console.log(INVERSES)
        return Number(
            (powers[right + 1] * multiplicativeInverse(powers[left], mod)) %
                mod,
        );
    });
}

const INVERSES: bigint[] = [];
export function multiplicativeInverse(x: bigint, mod: bigint): bigint {
    if (typeof INVERSES[Number(x)] !== "undefined") return INVERSES[Number(x)];
    const xb = BigInt(x);
    const mb = BigInt(mod);
    let y = 1n,
        m = mb,
        p = xb;
    m = m - 2n;

    for (let i = 0n; 1n << i < m; i++, p = (p * p) % mb) {
        if (((m >> i) & 1n) == 1n) y = (y * p) % mb;
    }
    INVERSES[Number(x)] = y;
    return y;
}
