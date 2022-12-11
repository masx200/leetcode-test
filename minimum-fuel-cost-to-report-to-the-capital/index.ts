export default function minimumFuelCost(
    roads: number[][],
    seats: number,
): number {
    let ans = 0;
    const g = Array(roads.length + 1)
        .fill(0)
        .map(() => Array<number>());

    for (const e of roads) {
        const [x, y] = e;

        g[x].push(y);
        g[y].push(x);
    }
    function dfs(x: number, f: number): number {
        let size = 1;

        for (const y of g[x]) {
            if (y != f) {
                size += dfs(y, x);
            }
        }
        if (x > 0) ans += Math.floor((size + seats - 1) / seats);
        return size;
    }
    dfs(0, -1);
    return ans;
}
