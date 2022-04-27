export default function maxVowels(s: string, k: number): number {
    let res = 0;
    const n = s.length;
    let v = 0;
    for (let i = 0; i < n; i++) {
        v += Number(yuanyin.has(s[i]));
        if (i === k - 1) {
            res = v;
        }

        if (i >= k) {
            v -= Number(yuanyin.has(s[i - k]));
            res = Math.max(res, v);
        }
    }

    return Math.min(k, res);
}
const yuanyin = new Set(["a", "e", "i", "o", "u"]);
