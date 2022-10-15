function minCostConnectPoints(points: number[][]): number {
    const p0 = points[0];
    const ps: Map<number, number[]> = new Map(points.map((p, i) => [i, p]));
    ps.delete(0);
    const ds: Map<number, number> = new Map(
        points.map((p, i) => [i, 曼哈顿距离(p, p0)]),
    );
    ds.delete(0);
    let ans = 0;

    while (ps.size) {
        let mi = 0;
        let md = Infinity;
        let p1: number[] = [];
        for (const [i, p] of ps) {
            const d = ds.get(i) ?? 0;
            if (d < md) {
                mi = i;
                p1 = p;
                md = d;
            }
        }
        ps.delete(mi);
        ds.delete(mi);
        ans += md;

        for (const [i, d] of ds) {
            const p: number[] = ps.get(i) ?? [];
            ds.set(i, Math.min(d, 曼哈顿距离(p, p1)));
        }
    }

    return ans;
}
function 曼哈顿距离(a: number[], b: number[]) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}
export default minCostConnectPoints;
