function rearrangeCharacters(s: string, target: string): number {
    const sCounts = new Map<string, number>();
    const targetCounts = new Map<string, number>();
    const n = s.length, m = target.length;
    for (let i = 0; i < m; i++) {
        const c = target[i];
        targetCounts.set(c, (targetCounts.get(c) || 0) + 1);
    }
    for (let i = 0; i < n; i++) {
        const c = s[i];
        if (targetCounts.has(c)) {
            sCounts.set(c, (sCounts.get(c) || 0) + 1);
        }
    }
    let ans = Number.MAX_VALUE;
    for (const [c, count] of targetCounts) {
        const totalCount = (sCounts.has(c) ? sCounts.get(c) : 0) ?? 0;
        ans = Math.min(ans, Math.floor(totalCount / count));
        if (ans === 0) {
            return 0;
        }
    }
    return ans;
}
export default rearrangeCharacters;
