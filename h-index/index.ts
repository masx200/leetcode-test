function hIndex(citations: number[]): number {
    const n = citations.length;
    let l = 0,
        r = n;
    while (l < r) {
        const mid = (l + r + 1) >> 1;
        if (check(citations, mid)) l = mid;
        else r = mid - 1;
    }
    return r;
}
function check(cs: number[], mid: number) {
    let ans = 0;
    for (const i of cs) if (i >= mid) ans++;
    return ans >= mid;
}
export default hIndex;
