import { multiplicativeInverse } from "../fancy-sequence/Fancy.ts";

function countAnagrams(s: string): number {
    const mod = 1e9 + 7;
    let ans = 1,
        mul = 1;

    for (const cc of s.split(" ")) {
        const cnt = Array<number>(26).fill(0);

        for (const [i, c] of Array.prototype.entries.call(cc)) {
            cnt[c.charCodeAt(0) - "a".charCodeAt(0)]++;
            mul = (mul * cnt[c.charCodeAt(0) - "a".charCodeAt(0)]) % mod;
            ans = (ans * (i + 1)) % mod;
        }
    }

    return Number(
        (BigInt(ans) * multiplicativeInverse(mul, BigInt(mod))) % BigInt(mod),
    );
}
export default countAnagrams;
