export default function wordBreak(s: string, wordDict: string[]): string[] {
    if (
        Array.from(new Set(s)).some((c) => !wordDict.some((w) => w.includes(c)))
    ) return [];
    const lens = Array.from(new Set(wordDict.map((a) => a.length))).sort((
        a,
        b,
    ) => a - b);
    const n: number = s.length;
    const set: Set<string> = new Set(wordDict);
    const cache: string[][][] = Array(n);
    const list = dfs(0);
    return list.map((t) => t.join(" "));

    function dfs(k: number): string[][] {
        if (cache[k]) return cache[k];
        if (k >= n) return [[]];
        const res: string[][] = [];
        for (const len of lens) {
            const i = k + len;
            if (k + len > s.length) break;
            const str = s.slice(k, i);
            if (set.has(str)) {
                const arr = dfs(i);
                for (const a of arr) {
                    res.push([str, ...a]);
                }
            }
        }
        cache[k] = res;
        return res;
    }
}
