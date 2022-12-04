function magnificentSets(n: number, edges: number[][]): number {
    const e: number[][] = Array(n + 1)
        .fill(0)
        .map(() => [] as number[]);

    for (const [a, b] of edges) {
        e[a].push(b);
        e[b].push(a);
    }
    const mp = new Map<number, number>();

    for (let i = 1; i <= n; i++) {
        const q = [i];
        const dis = Array<number>(n + 1).fill(0);
        dis[i] = 1;
        let mn = n;
        let mx = 1;

        while (q.length) {
            const x = q[0];
            q.shift();

            mn = Math.min(x, mn);

            for (const d of e[x]) {
                if (dis[d] == 0) {
                    dis[d] = dis[x] + 1;
                    mx = Math.max(mx, dis[d]);
                    q.push(d);
                }
                if (Math.abs(dis[d] - dis[x]) !== 1) {
                    return -1;
                }
            }
        }
        mp.set(mn, Math.max(mx, mp.get(mn) ?? 0));
    }

    let ans = 0;
    for (const v of mp.values()) {
        ans += v;
    }
    return ans;
}
export default magnificentSets;
