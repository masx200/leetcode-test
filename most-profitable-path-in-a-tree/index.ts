export default function mostProfitablePath(
    edges: number[][],
    bob: number,
    amount: number[],
): number {
    const g: number[][] = amount.map(() => []);

    for (const [x, y] of edges) {
        g[x].push(y);
        g[y].push(x);
    }
    const bobTime = amount.map(() => Infinity);
    function dfsBob(x: number, fa: number, t: number): boolean {
        if (x === 0) {
            bobTime[x] = t;
            return true;
        }
        let found0 = false;

        for (const y of g[x]) {
            if (y != fa && dfsBob(y, x, t + 1)) {
                found0 = true;
            }
        }
        if (found0) {
            bobTime[x] = t; // 只有可以到达 0 才标记访问时间
        }
        return found0;
    }
    dfsBob(bob, -1, 0);
    g[0].push(-1);
    let ans = -Infinity;

    function dfsAlice(x: number, fa: number, aliceTime: number, sum: number) {
        if (aliceTime < bobTime[x]) {
            sum += amount[x];
        } else if (aliceTime == bobTime[x]) {
            sum += amount[x] / 2;
        }
        if (g[x].length == 1) {
            // 叶子
            ans = Math.max(ans, sum); // 更新答案
            return;
        }
        for (const y of g[x]) {
            if (y != fa) {
                dfsAlice(y, x, aliceTime + 1, sum);
            }
        }
    }
    dfsAlice(0, -1, 0, 0);
    return ans;
}
