export default function longestStrChain(words: string[]): number {
    const map = new Map<number, Set<number>>();
    let res = 1;
    words.sort((a, b) => a.length - b.length);
    words.forEach((i, idx) => {
        const set = map.get(i.length) ?? new Set();
        if (!map.has(i.length)) map.set(i.length, set);
        set.add(idx);
    });

    const dp: number[] = words.map(() => 1);
    for (let i = 0; i < dp.length; i++) {
        const set = map.get(words[i].length - 1);
        if (set) {
            for (const idx of set) {
                if (can(words[idx], words[i])) {
                    dp[i] = Math.max(dp[i], dp[idx] + 1);
                }
                res = Math.max(res, dp[i]);
            }
        }
    }
    return res;
}
function can(s1: string, s2: string) {
    // abc
    // adbc
    let c1 = 0,
        c2 = 0;
    let wrong = 0;
    while (c1 < s1.length) {
        if (s1[c1] !== s2[c2]) {
            wrong += 1;
            if (wrong > 1) return false;
            c2 += 1;
        }
        if (s1[c1] === s2[c2]) {
            c1 += 1;
            c2 += 1;
        }
    }
    return true;
}
