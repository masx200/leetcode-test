import { multiplicativeInverse } from "./multiplicativeInverse.ts";

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
        return Number(
            (powers[right + 1] * multiplicativeInverse(powers[left], mod)) %
                mod,
        );
    });
}
