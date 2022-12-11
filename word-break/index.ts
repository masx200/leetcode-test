export default wordBreak;
function wordBreak(s: string, wordDict: string[]): boolean {
    if (
        Array.from(new Set(s)).some((c) => !wordDict.some((w) => w.includes(c)))
    )
        return false;

    const set = new Set(wordDict);
    const lens = Array.from(new Set(wordDict.map((a) => a.length))).sort(
        (a, b) => a - b
    );

    const cached = new Map<string, boolean>();

    const dfs = cache((s: string): boolean => {
        if (set.has(s)) return true;

        if (s.length === 0) return true;

        for (const len of lens) {
            if (len > s.length) break;

            if (set.has(s.slice(0, len))) {
                if (dfs(s.slice(len))) return true;
            }
        }

        return false;
    });

    function cache<T extends (s: string) => boolean>(fn: T): T {
        return ((s: string): boolean => {
            if (cached.has(s)) {
                return cached.get(s) as boolean;
            }

            const res = fn(s);
            cached.set(s, res);
            return res;
        }) as T;
    }
    return dfs(s);
}
