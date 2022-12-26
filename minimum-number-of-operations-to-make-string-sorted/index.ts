import { multiplicativeInverse } from "../range-product-queries-of-powers/multiplicativeInverse.ts";

function makeStringSorted(s: string): number {
    const mod = Number(1e9 + 7);
    const n = s.length;

    // fac[i] 表示 i! mod m
    // facinv[i] 表示 i! 在 mod m 意义下的乘法逆元
    const fac = Array<number>(n + 1).fill(0);
    const facinv = Array<number>(n + 1).fill(0);

    fac[0] = facinv[0] = 1;
    for (let i = 1; i < n; ++i) {
        fac[i] = Number((BigInt(fac[i - 1]) * BigInt(i)) % BigInt(mod));
        // 使用费马小定理 + 快速幂计算乘法逆元
        facinv[i] = multiplyWithMod(fac[i], mod - 2);
    }

    // freq 存储每个字符出现的次数
    const freq = Array<number>(26).fill(0);
    for (const ch of s) {
        ++freq[ch.charCodeAt(0) - "a".charCodeAt(0)];
    }

    let ans = 0;
    for (let i = 0; i < n - 1; ++i) {
        // rank 求出比 s[i] 小的字符数量
        let rank = 0;
        for (let j = 0; j < s[i].charCodeAt(0) - "a".charCodeAt(0); ++j) {
            rank += freq[j];
        }
        // 排列个数的分子
        let cur = Number((BigInt(rank) * BigInt(fac[n - i - 1])) % BigInt(mod));
        // 依次乘分母每一项阶乘的乘法逆元
        for (let j = 0; j < 26; ++j) {
            cur = Number((BigInt(cur) * BigInt(facinv[freq[j]])) % BigInt(mod));
        }
        ans = (ans + cur) % mod;
        --freq[s[i].charCodeAt(0) - "a".charCodeAt(0)];
    }

    return ans;
}
export default makeStringSorted;

function multiplyWithMod(x: number, y: number): number {
    return Number(multiplicativeInverse(BigInt(x), BigInt(y + 2)));
}
