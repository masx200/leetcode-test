function similarPairs(words: string[]): number {
    const cnt = new Map<number, number>();
    let ans = 0;
    for (const s of words) {
        let mask = 0;

        for (const c of s) {
            mask |= 1 << (c.charCodeAt(0) - "a".charCodeAt(0));
        }
        ans += cnt.get(mask) ?? 0;
        cnt.set(mask, (cnt.get(mask) ?? 0) + 1);
    }
    return ans;
}
export default similarPairs;
