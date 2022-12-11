function minTimeToType(word: string): number {
    let p = "a",
        ans = 0;
    for (const c of word) {
        ans +=
            Math.min(
                Math.abs(p.charCodeAt(0) - c.charCodeAt(0)),
                26 - Math.abs(c.charCodeAt(0) - p.charCodeAt(0))
            ) + 1;
        p = c;
    }
    return ans;
}
export default minTimeToType;
