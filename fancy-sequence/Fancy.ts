import { multiplicativeInverse } from "./multiplicativeInverse.ts";

export default interface Fancy {
    getIndex: (idx: number) => number;
    multAll: (m: number) => void;
    addAll: (inc: number) => void;
    append: (val: number) => void;
}

export default function Fancy(): Fancy {
    const MOD = 1000000007n;
    const values: bigint[] = [];
    let add = 0n;
    let mult = 1n;
    let r_mult = 1n;

    function append(val: number): void {
        const result = ((BigInt(val) - add + MOD) * r_mult) % MOD;
        values.push(result);
    }

    function addAll(inc: number): void {
        add = (add + BigInt(inc)) % MOD;
    }

    function multAll(m: number): void {
        const mb = BigInt(m);
        mult = (mult * mb) % MOD;
        add = (add * mb) % MOD;

        r_mult = (r_mult * multiplicativeInverse(m, MOD)) % MOD;
    }

    function getIndex(idx: number): number {
        if (idx >= values.length) return -1;
        return Number((mult * BigInt(values[idx]) + add) % MOD);
    }
    return { getIndex, multAll, addAll, append };
}
