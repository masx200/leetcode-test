const MOD = 1000000007n;
export default interface Fancy {
    getIndex: (idx: number) => number;
    multAll: (m: number) => void;
    addAll: (inc: number) => void;
    append: (val: number) => void;
}

export default function Fancy(): Fancy {
    const values: bigint[] = [];
    let add = 0n;
    let mult = 1n;
    let r_mult = 1n;

    const append = function (val: number): void {
        const result = ((BigInt(val) - add + MOD) * r_mult) % MOD;
        values.push(result);
    };

    const addAll = function (inc: number): void {
        add = (add + BigInt(inc)) % MOD;
    };

    const multAll = function (m: number): void {
        const mb = BigInt(m);
        mult = (mult * mb) % MOD;
        add = (add * mb) % MOD;

        r_mult = (r_mult * multiplicativeInverse(m, MOD)) % MOD;
    };

    const getIndex = function (idx: number): number {
        if (idx >= values.length) return -1;
        return Number((mult * BigInt(values[idx]) + add) % MOD);
    };
    return { getIndex, multAll, addAll, append };
}

const multiplicativeInverse = function (x: number, mod: bigint): bigint {
    if (typeof INVERSES[x] !== "undefined") return INVERSES[x];
    const xb = BigInt(x);
    const mb = BigInt(mod);
    let y = 1n,
        m = mb,
        p = xb;
    m = m - 2n;

    for (let i = 0n; 1n << i < m; i++, p = (p * p) % mb) {
        if (((m >> i) & 1n) == 1n) y = (y * p) % mb;
    }
    INVERSES[x] = y;
    return y;
};

const INVERSES: bigint[] = [];
